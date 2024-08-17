'use client'
import React, { useState, useEffect } from 'react'
import { ChevronUpIcon } from "@radix-ui/react-icons"
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import ButtonChapter from '@/components/chapter/button-chapter'

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
    const slug = searchParams.get('slug')
    const chapter_name = searchParams.get('chapter_name')
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const [chapterContent, setChapterContent] = useState<ChapterContent | null>(null)

    useEffect(() => {
        const fetchChapterContent = async () => {
            if (chapter_api_data) {
                try {
                    const response = await axios.get(chapter_api_data)
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
                <ButtonChapter slug={slug || ''} chapter_name={chapter_name || ''} />
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                <div className="flex flex-col items-center">
                    {chapterContent?.chapter_image.map((image, index) => (
                        <div key={index} className="relative w-full h-auto">
                            <Image unoptimized
                                src={'https://sv1.otruyencdn.com/' + chapterContent.chapter_path + '/' + image.image_file}
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt="image-book"
                                className='object-contain'
                            />
                        </div>
                    ))}
                </div>
                <ChevronUpIcon
                    className="fixed top-2/3 right-5 h-10 w-10 bg-black rounded-full opacity-40 cursor-pointer"
                    onClick={scrollToTop} />
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                <ButtonChapter slug={slug || ''} chapter_name={chapter_name || ''} />
            </div>
        </section>
    )
}

export default Content
