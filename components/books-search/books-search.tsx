'use client'
import { useState, useEffect } from 'react'
import { getBooksByName } from '@/app/api/book-fire-api'
import { Book } from '@/app/types/book'
import CardBook from '@/components/card-book'
import { useSearchParams } from 'next/navigation'

function BooksSearch() {
    const [books, setBooks] = useState<Book[]>([])
    const searchParams = useSearchParams()
    const keyword = searchParams.get('keyword')

    useEffect(() => {
        const fetchBooks = async () => {
            if (keyword) {
                try {
                    const response = await getBooksByName(keyword)
                    setBooks(response || [])

                } catch (error) {
                    console.log('Failed to fetch books: ', error)
                }
            }
        }
        fetchBooks()
    }, [keyword])

    return (
        <section>
            <div className='mt-2'>
                {/* Category Name */}
                <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
                    <h3 className="text-xl">Tìm kiếm từ khóa: {keyword}</h3>
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

export default BooksSearch
