'use client'
import CardBook from '@/components/card-book'
import CarouselListBook from '@/components/carousel-list-book'
import { CarouselItem } from '@/components/ui/carousel'
import { useState, useEffect } from 'react'
import { getBooks } from '@/app/api/book-fire-api'
import { Book } from '@/app/types'
import Loading from '@/components/loading'

export default function Newest() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const handleClick = () => {
    // router.push(`/books-category?category=tap-chi-truyen-tranh`)
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
  if (isLoading) { return <Loading /> }
  return (
    <section>
      <div className="gap-6 flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="flex flex-row justify-between lg:gap-3 lg:flex-col items-end flex-grow-0 w-full lg:w-fit px-2">
          <h3 className="text-2xl w-60 lg:text-right">Xu hướng mới nhất</h3>
          <p className="button border-2 text-md rounded-xl inline px-2 py-1 mr-1 cursor-pointer" onClick={handleClick}>Thêm</p>
        </div>
        {/* Image */}
        <div className="px-1 w-full" data-aos="fade-up">
          <CarouselListBook>
            {Array.isArray(books) && books.length > 0 && books.map((book, index) => {
              return (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className='w-full h-auto max-w-[222px] aspect-[1/1.5] rounded-xl'>
                    <CardBook book={book} title={book?.name} slug={book?.slug} updatedAt={book?.updatedAt} chaptersLatest={book?.chaptersLatest}
                      image_url={book?.thumb_url} priority={true} />
                  </div>
                </CarouselItem>
              )
            }

            )}
          </CarouselListBook>
        </div>
      </div>
    </section>
  )
}
