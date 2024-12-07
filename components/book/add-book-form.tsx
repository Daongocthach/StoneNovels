'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Book, Category } from "@/app/types"
import AddBasicInformation from "@/components/book/add-basic-information"
import BookSelectCategory from "@/components/book/book-select-category"
import BookChapters from "@/components/book/book-chapters"
import { addBook, updateBook, getBookById } from "@/app/api/book-fire-api"
import { toast } from "react-toastify"
import { useSearchParams, useRouter } from 'next/navigation'
import { convertToSlug } from "@/lib/utils"
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '@/firebase'
import { PlusCircledIcon } from "@radix-ui/react-icons"

export default function AddBookForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const bookId = searchParams.get('bookId')
  const [bookData, setBookData] = useState<Book>({
    _id: "", name: "", slug: "", origin_name: [],
    content: "", status: "", thumb_url: "", sub_docquyen: false, author: [], category: [],
    chapters: [], updatedAt: "", chaptersLatest: []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [categoriesSelected, setCategoriesSelected] = useState<Category[]>([])
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [newAuthor, setNewAuthor] = useState<string>("")

  useEffect(() => {
    if (bookId) {
      getBookById(bookId).then((book) => {
        setBookData(book)
        setCategoriesSelected(book.category || [])
      })
        .catch((error) => {
          console.error("Error getting book by id: ", error)
        })
    }
  }, [bookId])

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
      setPreviewUrl(URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleAddAuthor = () => {
    if (newAuthor.trim()) {
      setBookData((prev) => ({
        ...prev,
        author: [...prev.author, newAuthor.trim()],
      }))
      setNewAuthor("")
    }
  }
  async function uploadImage(image: any): Promise<string> {
    const storageReference = storageRef(storage, `books/images/${image?.name || 'image'}`)
    await uploadBytes(storageReference, image)
    return await getDownloadURL(storageReference)
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let thumbUrl = bookData.thumb_url
      if (imageFile) {
        thumbUrl = await uploadImage(imageFile)
      }

      const updatedBookData = {
        ...bookData,
        slug: convertToSlug(bookData.name),
        thumb_url: thumbUrl,
        category: categoriesSelected,
        chaptersLatest: bookData?.chapters,
        updatedAt: new Date().toISOString(),
      }

      if (bookId) {
        await updateBook(updatedBookData)
        toast.success("Cập nhật sách thành công!")
      } else {
        await addBook(updatedBookData)
        toast.success("Thêm sách thành công!")
      }

      setBookData({
        _id: "", name: "", slug: "", origin_name: [],
        content: "", status: "", thumb_url: "", sub_docquyen: false, author: [], category: [],
        chapters: [], updatedAt: "", chaptersLatest: []
      })
      setCategoriesSelected([])
    } catch (error) {
      toast.error("Lỗi khi thêm/cập nhật sách!")
      console.error("Error adding/updating book: ", error)
    } finally {
      setIsLoading(false)
      router.push('/manage-book')
    }
  }
  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded shadow-md">
      <AddBasicInformation bookData={bookData} handleInputChange={handleInputChange} />
      <label className="block text-sm font-medium text-gray-300 mt-4">Tên tác giả</label>
      <div className="flex items-center mt-2 flex-row mb-4">
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="p-2 border border-gray-300 rounded-md text-black mr-2"
          placeholder="Nhập tên tác giả"
        />
        <button
          type="button"
          onClick={handleAddAuthor}
          className=" p-2 bg-blue-500 text-white rounded-md"
        >
          Thêm
        </button>
        {bookData.author.map((author, index) => (
          <div key={index} className="ml-2">{author + ', '}</div>
        ))}
      </div>
      <BookSelectCategory categoriesSelected={categoriesSelected} setCategoriesSelected={setCategoriesSelected} />
      <BookChapters bookData={bookData} setBookData={setBookData} />
      <label className="block text-sm font-medium text-gray-300 mt-4">Book Image</label>
      <div className="w-32 h-32 rounded-xl relative border border-white">
        <PlusCircledIcon className="w-10 h-10 cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {(bookData?.thumb_url && imageFile === null) ?
          <img src={bookData.thumb_url} alt={bookData.name} className="w-full h-full rounded-xl object-cover opacity-50" /> :
          previewUrl ?
            <img src={previewUrl} alt={'preview image'} className="w-full h-full rounded-xl object-cover opacity-50" />
            :
            <div></div>
        }
        <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 left-0" />
      </div>
      <button type="submit"
        className={`mt-4 w-full p-2 bg-blue-500 text-white font-semibold rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? "Đang thêm..." : bookId ? "Cập nhật" : "Thêm sách"}
      </button>
    </form>
  )
}


