'use client'
import React, { useState, useEffect } from 'react'
import ButtonChapter from '@/components/book-detail/button-chapter'
import { Button } from '@/components/ui/button'
import { ChevronUpIcon } from "@radix-ui/react-icons"
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'

type ChapterContent = {
    comic_name: string
    chapter_name: string
    chapter_title: string
    chapter_path: string
    chapter_image: {
        image_page: number
        image_file: string
    }[]
}

function Content() {
    const searchParams = useSearchParams()
    const chapter_api_data = searchParams.get('chapter_api_data')
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const [chapterContent, setChapterContent] = useState<ChapterContent | null>(null)

    useEffect(() => {
        const fetchChapterContent = async () => {
            if (chapter_api_data) {
                try {
                    const response = await axios.get(chapter_api_data)
                    console.log(response?.data?.data?.item)
                    setChapterContent(response?.data?.data?.item)
                } catch (error) {
                    console.log('Failed to fetch chapter content: ', error)
                }
            }
        }
        fetchChapterContent()
    }, [chapter_api_data])

    return (
        <section className="pt-40">
            <div className='max-w-6xl mx-auto px-2 flex flex-col items-center'>
                <h3 className="text-3xl text-white font-bold max-w-3xl mb-2">
                    {chapterContent?.comic_name ? chapterContent?.comic_name.replace(/\[.*?\]/g, '').trim() : 'Loading...'}
                </h3>
                <p className="text-gray-400 text-xl block max-w-3xl mb-2 text-center">
                    {'Chương ' + chapterContent?.chapter_name || '1' + ' ' + chapterContent?.chapter_title || 'Loading...'}
                </p>
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                <div className="flex flex-col items-center">
                    {chapterContent?.chapter_image.map((image, index) => (
                        <div key={index} className="relative w-full h-auto mb-4">
                            <Image
                                src={'https://sv1.otruyencdn.com/' + chapterContent.chapter_path + '/' + image.image_file}
                                width={700} height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w- rounded-xl brightness-90 cursor-pointer" alt="image-book"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex space-x-4 py-4">
                    <Button variant={'outline'} className='rounded-full' onClick={scrollToTop}>
                        <ChevronUpIcon className="h-7 w-7" />
                    </Button>
                </div>
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                <ButtonChapter />
            </div>
        </section>
    )
}

export default Content
