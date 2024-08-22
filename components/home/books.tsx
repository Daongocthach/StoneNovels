'use client'

import CardBook from "@/components/card-book"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import bookApi from '@/app/api/books-api'
import { useState, useEffect } from 'react'
import { CardBookModel } from "@/app/types/card-book-model"


export default function Books() {
  const [books, setBooks] = useState<CardBookModel[]>([])
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getBooks()
        setBooks(response?.data?.items)
      } catch (error) {
        console.log('Failed to fetch books: ', error)
      }
    }
    fetchBooks()
  }, [])
  return (
    <section>
      <div className='pt-10 max-w-6xl mx-auto '>
        {/* Category Name */}
        <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
          <h3 className="text-2xl">Mới cập nhật</h3>
          <ChevronDownIcon width="32" height="24" />
        </div>
        <div className="flex flex-wrap w-full px-1 pt-2 gap-3">
          {Array.isArray(books) && books.length > 0 && books.map((book, index) => (
            <div
              key={index}
              className="flex-grow flex-shrink-0 min-w-[160px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl mb-4"
            >
              <CardBook
                priority={false}
                title={book?.name}
                slug={book?.slug}
                image_url={'https://img.otruyenapi.com/uploads/comics/' + book?.thumb_url}
                updatedAt={book?.updatedAt} chaptersLatest={book?.chaptersLatest}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
