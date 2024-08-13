import React from 'react'
import Image from 'next/image'
import image from '@/public/images/bookexample.jpg'
interface CardBookProps {
    title: string;
    image_url: string;
}

const CardBook: React.FC<CardBookProps> = ({ title, image_url }) => {
    return (
        <div className='relative w-full h-full'>
            <Image layout='fill' className="rounded-xl brightness-90 cursor-pointer" src={image_url} alt="image-book" />
            <p className='absolute bottom-0 text-sm w-full bg-black rounded-b-xl opacity-70 line-clamp-1 text-center pt-2 uppercase'>
                {title}
            </p>
        </div>
    )
}

export default CardBook