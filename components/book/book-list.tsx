'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getBooks, deleteBook } from '@/app/api/book-fire-api'
import { Book } from '@/app/types'

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks()
        console.log('Danh sách sách: ', booksData)
        setBooks(booksData || [])
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sách: ', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooks()
  }, [])

  const handleDelete = async (bookId: string) => {
    setIsLoading(true)
    setMessage('')

    try {
      await deleteBook(bookId)
      setBooks((prevBooks) => prevBooks.filter((book) => book?.id !== bookId))
      setMessage('Xóa sách thành công!')
    } catch (error) {
      setMessage('Có lỗi xảy ra khi xóa sách.')
      console.error('Error deleting book: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReadBook = (pdfUrl: string) => {
    router.push(`/read-book?pdfUrl=${encodeURIComponent(pdfUrl)}`)
  }

  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Danh sách sách</h2>
      {message && <p className="text-green-500">{message}</p>}
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
              <h3 className="text-lg font-bold">{book.name}</h3>
              <p>Tác giả: {book.author}</p>
              <p>Mô tả: {book.content}</p>
              {/* <a href={book.} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Xem PDF
              </a> */}
              {/* <button
                onClick={() => handleReadBook(book.pdfUrl)}
                className="ml-4 p-2 bg-blue-500 text-white rounded-md"
              >
                Đọc sách
              </button> */}
              <button onClick={() => handleDelete(book?.id || '')} className="ml-4 p-2 bg-red-500 text-white rounded-md">Xóa</button>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy sách nào.</p>
      )}
    </div>
  )
}
