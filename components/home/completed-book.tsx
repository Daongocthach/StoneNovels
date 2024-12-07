'use client'
import CardBook from "@/components/card-book"
import CarouselListBook from "@/components/carousel-list-book"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from 'react'
import { CarouselItem } from "@/components/ui/carousel"
import { getBooks } from "@/app/api/book-fire-api"
import { Book } from "@/app/types"

export default function CompletedBook() {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks()
        console.log('Danh sách sách: ', booksData)
        setBooks(booksData || [])
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sách: ', error)
      } finally {
      }
    }
    fetchBooks()
  }, [])
  return (
    <section>
      <div className='mt-2'>
        {/* Category Name */}
        <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
          <h3 className="text-2xl">Đã hoàn thành</h3>
          <ChevronDownIcon width="32" height="24" />
        </div>
        <div className="pt-2 sm:px-2 flex flex-col items-center" data-aos="fade-up">
          <div className="w-full relative">
            {Array.isArray(books) && books.length > 0 &&
              <CarouselListBook>
                {books.map((book, index) => (
                  <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className='w-full h-auto max-w-[222px] aspect-[1/1.5] rounded-xl'>
                      <CardBook title={book?.name} slug={book?.slug} updatedAt={book?.updatedAt} chaptersLatest={book?.chaptersLatest}
                        image_url={book?.thumb_url} priority={false}/>
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
