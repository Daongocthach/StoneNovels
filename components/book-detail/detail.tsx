'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import bookApi from '@/app/api/books-api'
import { Book } from '@/app/types/book'
import Loading from '@/components/loading'
import Chapters from '@/components/book-detail/chapters'
import { useSearchParams } from 'next/navigation'

function Detail() {
    const searchParams = useSearchParams()
    const slug = searchParams.get('slug')
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const handleReadMoreToggle = (): void => {
        setIsExpanded(prevState => !prevState)
    }
    const [book, setBook] = useState<Book | null>(null)
    useEffect(() => {
        const fetchBook = async () => {
            if (slug) {
                try {
                    const response = await bookApi.getBook(slug)
                    setBook(response?.data?.item)
                } catch (error) {
                    console.log('Failed to fetch book: ', error)
                }
            }
        }
        fetchBook()
    }, [slug])

    if (!book) return <Loading />

    return (
        <section className="pt-40">
            <div className=" max-w-6xl mx-auto px-1 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <Image unoptimized src={'https://img.otruyenapi.com/uploads/comics/' + book.thumb_url}
                        alt='image' width={500} height={500} className='w-full brightness-90 mb-2 rounded-md' />
                    <div className='flex gap-2 p-2'>
                        {/* <button className="btn text-white bg-red-600 hover:bg-red-500 whitespace-nowrap px-4 py-2 text-sm rounded-md">
                            Yêu thích
                        </button> */}
                        <button className="btn text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 text-sm lg:w-full rounded-md">
                            Đọc ngay
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-3 border-l-[1px] border-white pl-10">
                    <div className="mb-5">
                        <h3 className="text-3xl text-white font-bold mb-3">{book.name}</h3>
                        <span className="text-gray-400 text-sm block">{book.origin_name.join(', ')}</span>
                    </div>
                    <p className={`text-gray-400 text-lg leading-7 transition-max-height duration-300 ease-in-out 
                        ${isExpanded ? 'max-h-full' : 'max-h-24 line-clamp-3'}`}
                        dangerouslySetInnerHTML={{ __html: book.content }}>
                    </p>
                    <button
                        onClick={handleReadMoreToggle}
                        className="text-blue-500 mt-2 focus:outline-none"
                    >
                        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                    </button>
                    <div className="mt-8">
                        <div className="grid grid-cols-1">
                            <ul className="space-y-2">
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Tác giả:</span>
                                    {book.author.map(author => {
                                        if (author == '') return 'Đang cập nhật'
                                        else return author
                                    }
                                    ).join(', ')}
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Thể loại:</span>
                                    {book.category.map(cat => cat.name).join(', ')}
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Nguồn:</span>
                                    {book.sub_docquyen ? 'Sưu tầm' : 'Original'}
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Trạng thái:</span>
                                    {book.status}
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Số chương:</span>
                                    {Array.isArray(book.chapters) && book.chapters.length > 0 &&
                                        book.chapters.flatMap(chap => chap.server_data).length}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {Array.isArray(book.chapters) && book.chapters.length > 0 && <Chapters slug={slug || ''} chapters={book.chapters[0].server_data} />}
        </section>
    )
}

export default Detail
