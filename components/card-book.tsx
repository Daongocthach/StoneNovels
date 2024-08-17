'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Chapter } from '@/app/types/chapter'
import { formatDistanceToNow, Locale } from 'date-fns'
import { vi } from 'date-fns/locale'

interface CardBookProps {
    title: string
    image_url: string
    slug: string
    updatedAt: string,
    chaptersLatest: Chapter[],
}

const CardBook: React.FC<CardBookProps> = ({ title, image_url, slug, updatedAt, chaptersLatest }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/book-detail?slug=${slug}`)
    }
    const handleChapterClick = () => {
        if (!Array.isArray(chaptersLatest) || chaptersLatest.length === 0) return
        router.push(`/chapter?slug=${slug}&chapter_name=${chaptersLatest[0].chapter_name}&chapter_api_data=${chaptersLatest[0].chapter_api_data}`)
    }
    const date = new Date(updatedAt)
    const result = formatDistanceToNow(date, { locale: vi })
    return (
        <div className='relative w-full max-w-[222px] cursor-pointer'>
            <div className='relative w-full h-0 pb-[150%]' onClick={handleClick}>
                <Image
                    src={`${image_url}`}
                    alt={title}
                    fill
                    className='rounded-xl'
                    unoptimized
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <p className='absolute top-2 left-2 min-w-20 p-0.5 rounded-md bg-orange-600 flex-col flex items-center line-clamp-1 text-xs text-center text-white capitalize'>
                {result}
            </p>
            <div className='absolute bottom-0 w-full bg-black rounded-b-xl opacity-90 flex-col flex items-center'>
                <p className='line-clamp-1 text-center uppercase text-sm font-semibold'>
                    {title}
                </p>
                <p className='line-clamp-1 text-center text-xs' onClick={handleChapterClick}>
                    Chương: {Array.isArray(chaptersLatest) && chaptersLatest.length > 0 && chaptersLatest[0].chapter_name}
                </p>
            </div>
        </div>
    )
}

export default CardBook