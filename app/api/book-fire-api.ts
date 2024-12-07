import { ref as dbRef, set, push, get, remove, query, orderByChild, equalTo } from "firebase/database"
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { database, storage } from '@/firebase'
import { Book } from '@/app/types/book'

async function uploadChapterPdf(pdfFile: any): Promise<string> {
  const storageReference = storageRef(storage, `books/chapters/${pdfFile.name}`)
  await uploadBytes(storageReference, pdfFile)
  return await getDownloadURL(storageReference)
}

function isFile(value: unknown): value is File {
  return value instanceof File
}
export async function addBook(bookData: Book) {
  try {
    const chaptersWithUrls = await Promise.all(
      bookData.chapters.map(async (chapter) => {
            if (isFile(chapter.chapter_api_data)) {
              const pdfUrl = await uploadChapterPdf(chapter.chapter_api_data)
              return {
                filename: chapter.chapter_api_data.name,
                chapter_name: chapter.chapter_name,
                chapter_title: chapter.chapter_title,
                chapter_api_data: pdfUrl,
              }
            }
            return chapter
          })
        )
      
    const newBookRef = push(dbRef(database, 'books'))
    await set(newBookRef, {
      ...bookData,
      chapters: chaptersWithUrls,
      chaptersLatest: chaptersWithUrls,
    })
    console.log("Thêm sách thành công!")
  } catch (error) {
    console.error("Lỗi khi thêm sách: ", error)
  }
}

export async function updateBook(bookData: Book) {
  try {
    const bookRef = dbRef(database, `books/${bookData?.id}`)
    const bookSnapshot = await get(bookRef)

    if (!bookSnapshot.exists()) {
      throw new Error("Không tìm thấy sách để cập nhật.")
    }

    const chaptersWithUrls = await Promise.all(
      bookData.chapters.map((chapter) => {
        if (isFile(chapter.chapter_api_data)) {
          const pdfUrl = uploadChapterPdf(chapter.chapter_api_data)
          return {
            filename: chapter.chapter_api_data.name,
            chapter_name: chapter.chapter_name,
            chapter_title: chapter.chapter_title,
            chapter_api_data: pdfUrl,
          }
        }
        return chapter
      })
    )

    await set(bookRef, {
      ...bookData,
      chapters: chaptersWithUrls,
      chaptersLatest: chaptersWithUrls,
    })

    console.log("Cập nhật sách thành công!")
  } catch (error) {
    console.error("Lỗi khi cập nhật sách: ", error)
    throw error
  }
}
export async function getBookById(bookId: string) {
  try {
    const bookRef = dbRef(database, `books/${bookId}`)
    const snapshot = await get(bookRef)

    if (!snapshot.exists()) {
      console.log("Không tìm thấy sách.")
      return null
    }

    const bookData = snapshot.val()
    return {
      id: bookId,
      ...bookData,
    }
  } catch (error) {
    console.error("Lỗi khi lấy sách theo ID: ", error)
    throw error
  }
}

export async function getBooks() {
  try {
    const booksRef = dbRef(database, 'books')
    const snapshot = await get(booksRef)

    if (snapshot.exists()) {
      const booksData = snapshot.val()
      const booksList = Object.keys(booksData).map(key => ({
        id: key,
        ...booksData[key],
      }))

      return booksList
    } else {
      console.log("Không có sách nào.")
      return []
    }
  } catch (error) {
    console.error("Lỗi khi lấy sách: ", error)
  }
}
export async function getBooksByName(name: string) {
  try {
    const books = await getBooks()
    if (books)
      return books.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase())
      )
  } catch (error) {
    console.error("Lỗi khi tìm sách theo từ khóa: ", error)
    return []
  }
}
export async function getBooksByCategory(slug: string) {
  try {
    const books = await getBooks()
    if (books) {
      const filteredBooks = books.filter(book =>
        book.category.some((category: any) => category.slug === slug)
      )
      return filteredBooks
    }
  } catch (error) {
    console.error("Lỗi khi tìm sách theo từ khóa: ", error)
    return []
  }
}

export async function deleteBook(bookId: string) {
  try {
    const bookRef = dbRef(database, `books/${bookId}`)
    const bookSnapshot = await get(bookRef)

    if (!bookSnapshot.exists()) {
      throw new Error("Không tìm thấy sách.")
    }

    const bookData = bookSnapshot.val()

    if (bookData.pdfUrl) {
      const storageReference = storageRef(storage, `books/${bookId}`)
      await deleteObject(storageReference)
    }

    await remove(bookRef)

    console.log("Xóa sách thành công!")
  } catch (error) {
    console.error("Lỗi khi xóa sách: ", error)
    throw error
  }
}




export async function getBookBySlug(slug: string): Promise<Book | null> {
  try {
    const books = await getBooks();
    if (!books) {
      console.error("Không có sách nào trong danh sách.")
      return null;
    }
    const book = books.find((book) => book.slug === slug)
    if (!book) {
      console.log("Không tìm thấy sách với slug này.")
      return null;
    }
    return book
  } catch (error) {
    console.error("Lỗi khi tìm sách theo slug: ", error)
    throw error
  }
}
