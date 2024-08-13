'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon, ReaderIcon } from "@radix-ui/react-icons"

function ButtonChapter() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const handleReadMoreToggle = (): void => {
        setIsExpanded(prevState => !prevState)
    }
    return (
        <div className='flex flex-row items-center gap-2'>
            <Button variant={'destructive'} className='bg-red-600 text-white'>
                <ChevronLeftIcon className="h-4 w-4" /> Trước
            </Button>
            <Button className='bg-red-600 text-white px-6'>
                <ReaderIcon className="h-7 w-7" />
            </Button>
            <Button className='bg-red-600 text-white'>
                Tiếp <ChevronRightIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default ButtonChapter