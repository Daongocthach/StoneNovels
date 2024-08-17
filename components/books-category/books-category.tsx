'use client'
import { useState, useEffect } from 'react'
import bookApi from '@/app/api/books-api'
import { Book } from '@/app/types/book'
import Loading from '@/components/loading'
import CardBook from '@/components/card-book'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from 'next/navigation'

function BooksCategory() {
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true)
            if (category) {
                try {
                    const response = await bookApi.getBooksByCategory(category, page)
                    setBooks(response?.data?.items)
                    const totalItems = response?.data?.params?.pagination?.totalItems || 0
                    const totalItemsPerPage = response?.data?.params?.pagination?.totalItemsPerPage || 24
                    setTotalPages(Math.ceil(totalItems / totalItemsPerPage))
                } catch (error) {
                    console.log('Failed to fetch books: ', error)
                }
            }
            setLoading(false)
        }
        fetchBooks()
    }, [category, page])

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage)
        }
    }

    const renderPaginationItems = () => {
        const items = []
        const pageRange = 5
        const halfRange = Math.floor(pageRange / 2)
        const startPage = Math.max(1, page - halfRange)
        const endPage = Math.min(totalPages, startPage + pageRange - 1)

        if (startPage > 1) {
            items.push(
                <PaginationItem key={1} className='cursor-pointer'>
                    <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
                </PaginationItem>
            )
            if (startPage > 2) items.push(<PaginationEllipsis key='start-ellipsis' />)
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <PaginationItem key={i} className='cursor-pointer'>
                    <PaginationLink isActive={page === i} onClick={() => handlePageChange(i)}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) items.push(<PaginationEllipsis key='end-ellipsis' />)
            items.push(
                <PaginationItem key={totalPages} className='cursor-pointer'>
                    <PaginationLink onClick={() => handlePageChange(totalPages)}>{totalPages}</PaginationLink>
                </PaginationItem>
            )
        }

        return items
    }

    return (
        <section className="pt-40">
            <div className='max-w-6xl mx-auto '>
                {/* Category Name */}
                <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
                    <h3 className="text-2xl">Danh sách truyện {category}</h3>
                </div>
                <div className="md:mb-0 flex flex-row items-center flex-1 gap-3 w-full flex-wrap px-1 pt-2" data-aos="fade-up">
                    {books.map((book, index) => (
                        <div key={index} className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
                            <CardBook title={book?.name} slug={book?.slug} updatedAt={book?.updatedAt} chaptersLatest={book?.chaptersLatest}
                                image_url={'https://img.otruyenapi.com/uploads/comics/' + book?.thumb_url} />
                        </div>
                    ))}
                </div>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem className='cursor-pointer'>
                            <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
                        </PaginationItem>
                        {renderPaginationItems()}
                        <PaginationItem className='cursor-pointer'>
                            <PaginationNext onClick={() => handlePageChange(page + 1)} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    )
}

export default BooksCategory
