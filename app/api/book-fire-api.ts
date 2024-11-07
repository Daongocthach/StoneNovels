import { ref as dbRef, set, push, get, remove } from "firebase/database"
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { database, storage } from '@/firebase'
import { Book } from '@/app/types/book'


async function uploadChapterPdf(pdfFile: File): Promise<string> {
  const storageReference = storageRef(storage, `books/chapters/${pdfFile.name}`)
  await uploadBytes(storageReference, pdfFile)
  return await getDownloadURL(storageReference)
}

export async function addBook(bookData: Book) {
  try {
    const chaptersWithUrls = await Promise.all(
      bookData.chapters?.[0].server_data.map(async (chapter: any) => {
        if (chapter.chapter_api_data instanceof File) {
          const pdfUrl = await uploadChapterPdf(chapter.chapter_api_data)
          return { ...chapter, pdfUrl }
        }
        return chapter
      })
    )

    const newBookRef = push(dbRef(database, 'books'))
    await set(newBookRef, {
      ...bookData,
      chapters: chaptersWithUrls,
    })
    console.log("Thêm sách thành công!")
  } catch (error) {
    console.error("Lỗi khi thêm sách: ", error)
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
