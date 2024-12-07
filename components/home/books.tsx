'use client'

import CardBook from "@/components/card-book"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from 'react'
import { getBooks } from "@/app/api/book-fire-api"
import Loading from "@/components/loading"
import { Book } from "@/app/types"

export default function Books() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks()
        setBooks(booksData || [])
        console.log('Danh sách sách: ', booksData)
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sách: ', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBooks()
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return (
    <section>
      <div className='mt-2'>
        {/* Category Name */}
        <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
          <h3 className="text-2xl">Mới cập nhật</h3>
          <ChevronDownIcon width="32" height="24" />
        </div>
        <div className="flex flex-row flex-wrap w-full px-1 pt-2 gap-4">
          {Array.isArray(books) && books.length > 0 && books.map((book, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[160px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl mb-4"
            >
              <CardBook
                priority={false}
                title={book?.name}
                slug={book?.slug}
                image_url={book?.thumb_url}
                updatedAt={book?.updatedAt} chaptersLatest={book?.chaptersLatest}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
