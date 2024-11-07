'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Book, Category } from "@/app/types"
import AddBasicInformation from "@/components/book/add-basic-information"
import BookSelectCategory from "@/components/book/book-select-category"
import BookChapters from "@/components/book/book-chapters"
import AddChapterDialog from "@/components/book/add-chapter-dialog"
import { addBook } from "@/app/api/book-fire-api"
import { toast } from "react-toastify"

type AddBookFormProps = {
  book?: Book
}

export default function AddBookForm({ book }: AddBookFormProps) {
  const [bookData, setBookData] = useState<Book>({
    _id: "", name: "", slug: "", origin_name: [],
    content: "", status: "", thumb_url: "", sub_docquyen: false, author: [], category: [],
    chapters: [], updatedAt: "", chaptersLatest: []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [categoriesSelected, setCategoriesSelected] = useState<Category[]>([])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await addBook(bookData)
      toast.success("Thêm sách thành công!")
      setBookData({
        _id: "", name: "", slug: "", origin_name: [],
        content: "", status: "", thumb_url: "", sub_docquyen: false, author: [], category: [],
        chapters: [], updatedAt: "", chaptersLatest: []
      })
      setCategoriesSelected([])
    } catch (error) {
      toast.error("Lỗi khi thêm sách!")
      console.error("Error adding book: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded shadow-md">
      <AddBasicInformation bookData={bookData} handleInputChange={handleInputChange} />
      <BookSelectCategory categoriesSelected={categoriesSelected} setCategoriesSelected={setCategoriesSelected} />
      <BookChapters bookData={bookData} />
      <AddChapterDialog bookData={bookData} setBookData={setBookData} />
      <button type="submit"
        className={`mt-4 w-full p-2 bg-blue-500 text-white font-semibold rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? "Đang thêm..." : "Thêm sách"}
      </button>
    </form>
  )
}


