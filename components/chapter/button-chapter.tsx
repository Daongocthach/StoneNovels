import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, LayoutIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'
import { getBookById, getBookBySlug } from '@/app/api/book-fire-api'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Chapter } from '@/app/types/chapter'

interface ButtonChapterProps {
    book_name: string,
    id: string,
    chapter_name: string,
}

function ButtonChapter({ book_name, id, chapter_name }: ButtonChapterProps) {
    const router = useRouter()
    const [chapters, setChapters] = useState<Chapter[]>([])
    const [original_chapters, setOriginalChapters] = useState<Chapter[]>([])
    const [isStart, setIsStart] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const [open, setOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const book = await getBookById(id)
                    const chapters = book?.chapters
                    setOriginalChapters(chapters ?? [])
                    const sortedChapters = chapters?.slice().reverse()
                    const chapterIndex = chapters?.findIndex((chapter: Chapter) => chapter.chapter_name === chapter_name)
                    setCurrentIndex(chapterIndex ?? null)
                    setIsStart(chapterIndex === 0)
                    setIsEnd(chapterIndex === (chapters?.length ?? 0) - 1)
                    setChapters(sortedChapters ?? [])
                } catch (error) {
                    console.log('Failed to fetch book: ', error)
                }
            }
        }
        fetchData()
    }, [chapter_name])

    const handleChapterClick = (chapter: Chapter) => {
        router.push(`/chapter?book_name=${book_name}&id=${id}&chapter_name=${chapter.chapter_name}&chapter_api_data=${encodeURIComponent(chapter.chapter_api_data)}`)
        setOpen(false)
    }

    const handlePrevious = () => {
        if (currentIndex !== null && currentIndex > 0) {
            const previousChapter = original_chapters[currentIndex - 1]
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
            <Button variant={'destructive'} disabled={isStart}
                className={`${isStart ? 'bg-gray-500' : 'bg-red-600'} text-white rounded-l-xl rounded-r-none`}
                onClick={handlePrevious}>
                <ChevronLeftIcon className="h-4 w-4" /> Trước
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div className='bg-red-600 text-white py-2.5 px-4 flex flex-row items-center cursor-pointer'>
                        <LayoutIcon className="h-4 w-4" />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white text-black" aria-describedby={undefined}>
                    <DialogHeader>
                        <DialogTitle>{'Danh sách chương'}</DialogTitle>
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
            <Button variant={'destructive'}
                className={`${isEnd ? 'bg-gray-500' : 'bg-red-600'} text-white rounded-r-xl rounded-l-none`}
                disabled={isEnd} onClick={handleNext}>
                Tiếp <ChevronRightIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default ButtonChapter
