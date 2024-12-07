'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getBooks, deleteBook } from '@/app/api/book-fire-api'
import { Book } from '@/app/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { PlusCircledIcon, ReaderIcon, TrashIcon } from '@radix-ui/react-icons'

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('')
  const router = useRouter()
  const handleClick = (id: string) => {
    router.push(`/book-detail?id=${id}`)
  }
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks()
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
  const handleReadBook = (book: Book) => {
    router.push(`/chapter?book_name=${book?.name}&id=${book?.id}&chapter_name=${book?.chapters[0].chapter_name}&chapter_api_data=${encodeURIComponent(book?.chapters[0]?.chapter_api_data || '')}`)
  }
  const handleEditBook = (bookId: string) => {
    router.push(`/add-book?bookId=${encodeURIComponent(bookId)}`)
  }
  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>
  }

  return (
    <div>
      {message && <p className="text-green-400">{message}</p>}
      <div className='flex flex-row justify-between'>
        <h1 className="text-2xl font-bold mb-4">Quản lý sách</h1>
        <button onClick={() => router.push('/add-book')} className="p-2 bg-gray-700 text-white rounded-md mb-2">
          Thêm sách
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        {books.length > 0 ? (
          <ul>
            {books.map((book, index) => (
              <div key={index} className='grid grid-cols-12 mb-4 border border-gray-300 rounded-md p-4 gap-2'>
                <div className='col-span-3 mr-2 cursor-pointer rounded-md' onClick={() => handleClick(book?.id || '')}>
                  <img src={book.thumb_url} alt={book.name} className="w-full max-h-72 h-full rounded-md object-contain" />
                </div>
                <li className="col-span-9  gap-2 flex flex-col">
                  <h3 className="text-lg font-bold">{book.name}</h3>
                  <p>Tác giả: {Array.isArray(book?.author) && book.author.map(author => {
                    if (author == '') return 'Đang cập nhật'
                    else return author
                  }
                  ).join(', ')}</p>
                  <p>Mô tả: <span className='line-clamp-4'>{book.content}</span></p>
                  <div className=" ">
                    <label htmlFor="chapter" className="text-white">Các chương:</label>
                    <div className="text-white space-y-2">
                      {book?.chaptersLatest?.map((chapter, chapterIndex) => (
                        <div key={chapterIndex} className="flex flex-row items-center justify-between gap-2">
                          <span>{chapterIndex + 1 + '. ' + chapter?.chapter_name}</span>
                          <div className='flex flex-row items-center gap-2'>
                            <a href={chapter?.chapter_api_data} target="_blank" rel="noreferrer"
                              className="p-2 bg-red-500 text-white rounded-md flex flex-row items-center gap-2">
                              <ReaderIcon className="h-5 w-5 cursor-pointer" /> PDF
                            </a>
                            <button onClick={() => handleReadBook(book)}
                              className="p-2 bg-gray-700 text-white rounded-md">Đọc sách</button>
                          </div>
                        </div>))
                      }
                    </div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <label htmlFor="chapter" className="text-white">Thể loại:</label>
                    {book?.category?.map((category, index) => (
                      <div key={index} className="flex flex-row items-center">
                        <span className="text-gray-300 ml-2">{category.name}</span>
                        {index < book?.category?.length - 1 && <span className="text-white ml-2"> - </span>}
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <button onClick={() => handleEditBook(book?.id || '')}
                      className="p-2 bg-gray-700 text-white rounded-md flex flex-row items-center gap-2">
                      <PlusCircledIcon className="h-5 w-5" />
                      Cập nhật
                    </button>
                    <Dialog>
                      <DialogTrigger>
                        <button className="p-2 bg-red-500 text-white rounded-md flex flex-row items-center gap-2">
                          <TrashIcon className="h-5 w-5" />
                          Xóa
                        </button>
                      </DialogTrigger>
                      <DialogContent className='bg-gray-800'>
                        <DialogHeader>
                          <DialogTitle>Xóa sách này?</DialogTitle>
                          <DialogDescription>
                            Bạn chắc chắn xóa sách này, không thể hoàn tác!
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button type="submit" className='bg-gray-700' onClick={() => handleDelete(book?.id || '')}>Xóa</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </li>
              </div>

            ))}
          </ul>
        ) : (
          <p>Không tìm thấy sách nào.</p>
        )}
      </div>
    </div>
  )
}
