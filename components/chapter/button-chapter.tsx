import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, ReaderIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'
import bookApi from '@/app/api/books-api'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Chapter } from '@/app/types/chapter'

function ButtonChapter({ slug, chapter_name }: { slug: string, chapter_name: string }) {
    const router = useRouter()
    const [chapters, setChapters] = useState<Chapter[]>([])
    const [original_chapters, setOriginalChapters] = useState<Chapter[]>([])
    const [isStart, setIsStart] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const [open, setOpen] =  useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    useEffect(() => {
        const fetchBook = async () => {
            if (slug) {
                try {
                    const response = await bookApi.getBook(slug)
                    const books = response?.data?.item
                    if (Array.isArray(books?.chapters) && books?.chapters.length > 0) {
                        const chapters = books?.chapters[0].server_data
                        const sortedChapters = chapters.slice().reverse()
                        const chapterIndex = chapters.findIndex((chapter: Chapter) => chapter.chapter_name === chapter_name)

                        setCurrentIndex(chapterIndex)
                        setIsStart(chapterIndex === 0)
                        setIsEnd(chapterIndex === chapters.length - 1)

                        setChapters(sortedChapters)
                        setOriginalChapters(chapters)
                    }
                } catch (error) {
                    console.log('Failed to fetch book: ', error)
                }
            }
        }
        fetchBook()
    }, [slug, chapter_name])

    const handleChapterClick = (chapter: Chapter) => {
        router.push(`/chapter?slug=${slug}&chapter_name=${chapter.chapter_name}&chapter_api_data=${chapter.chapter_api_data}`)
        setOpen(false)
    }

    const handlePrevious = () => {
        if (currentIndex !== null && currentIndex > 0) {
            const previousChapter =original_chapters[currentIndex - 1]
            handleChapterClick(previousChapter)
        }
    }

    const handleNext = () => {
        if (currentIndex !== null && currentIndex < original_chapters.length - 1) {
            const nextChapter = original_chapters[currentIndex + 1]
            handleChapterClick(nextChapter)
        }
    }

    return (
        <div className='flex flex-row items-center gap-2'>
            <Button variant={'destructive'} disabled={isStart} className='bg-red-600 text-white' onClick={handlePrevious}>
                <ChevronLeftIcon className="h-4 w-4" /> Trước
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild >
                    <div className='bg-red-700 text-white rounded-md p-2 flex flex-row items-center cursor-pointer'>
                        Danh sách chương
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white text-black" >
                    <DialogHeader>
                        <DialogTitle>{slug}</DialogTitle>
                    </DialogHeader>
                    <div className='max-h-64 overflow-y-auto'>
                        {Array.isArray(chapters) && chapters.length > 0 && chapters.map((chapter, index) => (
                            <ul key={index} className="space-y-2">
                                <li className="text-base relative pl-5 cursor-pointer" onClick={() => handleChapterClick(chapter)}>
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
                                    <span className="text-gray-700 inline-block w-28">Chương {chapter.chapter_name}</span>
                                    <span className="text-gray-700 inline-block">
                                        {chapter.chapter_title ? ': ' + chapter.chapter_title : ''}
                                    </span>
                                </li>
                            </ul>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            <Button className='bg-red-600 text-white' disabled={isEnd} onClick={handleNext}>
                Tiếp <ChevronRightIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default ButtonChapter
