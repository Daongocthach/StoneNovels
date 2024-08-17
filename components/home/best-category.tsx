'use client'
import CardBook from '@/components/card-book'
import CarouselListBook from '@/components/carousel-list-book'
import { CarouselItem } from '@/components/ui/carousel'
import bookApi from '@/app/api/books-api'
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { CardBookModel } from '@/app/types/card-book-model'

export default function BestCategory() {
  const [books, setBooks] = useState<CardBookModel[]>([])
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getBooksByStatus('sap-ra-mat', 1)
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
          <h3 className="text-2xl">Yêu thích nhất</h3>
          <ChevronDownIcon width="32" height="24" />
        </div>
        <div className="pt-2 sm:px-2 gap-6 flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="flex flex-col gap-2 px-1 flex-1">
            <h3 className="text-xl font-bold">Kiếm Sĩ Đen - Berserk</h3>
            <p className="text-md rounded-md w-full line-clamp-2">Một trong những siêu phẩm của thời đại, Berserk mang dáng vóc của một thế giới rộng lớn trong bối cảnh thời kì Trung cổ châu Âu, cuộc chiến của những hiệp sĩ vĩ đại và thế lực đen tối huyền bí ma quỷ.
              Một tác phẩm kinh điển cho những ai đã từng đam mê “The Lord of The Ring” hoặc “Star War”, hoành tráng, dữ dội, vinh quang và nước mắt.</p>
            {/* Button */}
            <div className='flex flex-row items-center gap-5'>
              <p className="button border-2 text-md rounded-md inline px-4 py-1 ">Đọc ngay</p>
              <p className="button border-2 text-md rounded-md inline px-4 py-1 ">Yêu thích</p>
            </div>
          </div>
          {/* Image */}
          <div className="md:mb-0  flex-1 gap-3 w-full px-1 pt-2" data-aos="fade-up">
            <CarouselListBook>
              {Array.isArray(books) && books.length > 0 && books.map((book, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className='w-full h-auto max-w-[222px] aspect-[1/1.5] rounded-xl'>
                    <CardBook title={book?.name} slug={book?.slug} updatedAt={book?.updatedAt} chaptersLatest={book?.chaptersLatest}
                      image_url={'https://img.otruyenapi.com/uploads/comics/' + book?.thumb_url} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselListBook>
          </div>
        </div>
      </div>
    </section>
  )
}
