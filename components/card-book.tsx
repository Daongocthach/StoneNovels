'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CardBookProps {
    title: string
    image_url: string
    slug: string
}

const CardBook: React.FC<CardBookProps> = ({ title, image_url, slug }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/book-detail/${slug}`)
    }
    return (
        <div className='relative w-full h-full' onClick={handleClick}>
            <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-xl brightness-90 cursor-pointer" src={image_url} alt="image-book" />
            <p className='absolute bottom-0 text-sm w-full bg-black rounded-b-xl opacity-70 line-clamp-1 text-center pt-2 uppercase'>
                {title}
            </p>
        </div>
    )
}

export default CardBook