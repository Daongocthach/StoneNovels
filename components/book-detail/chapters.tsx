import { Chapter } from '@/app/types/chapter'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

interface ChaptersProps {
    chapters: Chapter[],
    slug: string
}

function Chapters({ chapters, slug }: ChaptersProps) {
    const router = useRouter()

    const handleClick = (chapter: Chapter) => {
        router.push(`/chapter?slug=${slug}&chapter_name=${chapter.chapter_name}&chapter_api_data=${chapter.chapter_api_data}`)
    }
    const sortedChapters = chapters.slice().reverse()
    return (
        <section className="pt-10">
            <hr className="bg-white max-w-6xl mx-auto" />
            <div className="pt-5 max-w-6xl mx-auto px-1 sm:px-6">
                <h5 className='h4 mb-5'>Danh sách chương</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Array.isArray(sortedChapters) && sortedChapters.length > 0 && sortedChapters.map((chapter, index) => (
                        <ul key={index} className="space-y-2">
                            <li className="text-base relative pl-5 cursor-pointer" onClick={() => handleClick(chapter)}>
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                <span className="text-gray-400 inline-block w-28">Chương {chapter.chapter_name} </span>
                                <span className="text-gray-400 inline-block">
                                    {chapter.chapter_title ? ': ' + chapter?.chapter_title : ''}
                                </span>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Chapters
