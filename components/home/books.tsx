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
          <h3 className="text-2xl">Danh sách truyện</h3>
          <ChevronDownIcon className="h-8 w-6" />
        </div>
        <div className="md:mb-0 flex flex-row items-center flex-1 gap-3 w-full flex-wrap px-1 pt-2" data-aos="fade-up">
          {Array.isArray(books) && books.length > 0 && books.map((book, index) => (
            <div key={index} className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
              <CardBook title={book?.name} slug={book?.slug}
                image_url={'https://img.otruyenapi.com/uploads/comics/' + book?.thumb_url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
