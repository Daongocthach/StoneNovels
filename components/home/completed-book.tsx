'use client'
import CardBook from "@/components/card-book"
import CarouselListBook from "@/components/carousel-list-book"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from 'react'
import bookApi from "@/app/api/books-api"
import { CarouselItem } from "@/components/ui/carousel"
import { CardBookModel } from "@/app/types/card-book-model"

export default function CompletedBook() {
  const [books, setBooks] = useState<CardBookModel[]>([])
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getBooksByStatus('hoan-thanh', 1)
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
          <h3 className="text-2xl">Đã hoàn thành</h3>
          <ChevronDownIcon className="h-8 w-6" />
        </div>
        <div className="pt-2 sm:px-2 flex flex-col items-center" data-aos="fade-up">
          <div className="w-full relative">
            {Array.isArray(books) && books.length > 0 &&
              <CarouselListBook>
                {books.map((book, index) => (
                  <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className='w-full h-auto max-w-[222px] aspect-[1/1.5] rounded-xl'>
                      <CardBook title={book?.name} slug={book?.slug}
                        image_url={'https://img.otruyenapi.com/uploads/comics/' + book?.thumb_url} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselListBook>}
          </div>
        </div>
      </div>
    </section>
  )
}
