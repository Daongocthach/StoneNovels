'use client'
import CardBook from '@/components/card-book'
import CarouselListBook from '@/components/carousel-list-book'
import { CarouselItem } from '@/components/ui/carousel'
import bookApi from '@/app/api/books-api'
import { useState, useEffect } from 'react'
import { CardBookModel } from '@/app/types/card-book-model'

export default function Newest() {
  const [books, setBooks] = useState<CardBookModel[]>([])
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getBooksByStatus('truyen-moi', 1)
        setBooks(response?.data?.items)
      } catch (error) {
        console.log('Failed to fetch books: ', error)
      }
    }
    fetchBooks()
  }, [])
  return (
    <section>
      <div className="pt-44 max-w-6xl mx-auto sm:px-6 gap-6 flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="flex flex-row justify-between lg:gap-3 lg:flex-col items-end flex-grow-0 w-full lg:w-fit px-2">
          <h3 className="text-2xl w-60 lg:text-right">Truyện tranh theo xu hướng mới nhất</h3>
          <p className="button border-2 text-md rounded-xl inline px-2 py-1 mr-1">Thêm</p>
        </div>
        {/* Image */}
        <div className="px-1 w-full" data-aos="fade-up">
          <CarouselListBook>
            {Array.isArray(books) && books.length > 0 && books.map((book, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className='w-full h-auto max-w-[222px] aspect-[1/1.5] rounded-xl'>
                  <CardBook title={book?.name} slug={book?.slug}
                    image_url={'https://img.otruyenapi.com/uploads/comics/' + book?.thumb_url} />
                </div>
              </CarouselItem>
            ))}
          </CarouselListBook>
        </div>
      </div>
    </section>
  )
}
