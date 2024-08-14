'use client'
import React, { useState } from 'react'
import ButtonChapter from '@/components/read-book/button-chapter'
import { Button } from '@/components/ui/button'
import { ChevronUpIcon, TriangleUpIcon, TriangleDownIcon } from "@radix-ui/react-icons"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function Content() {
    const [fontSize, setFontSize] = useState(16)
    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 2)
    }
    const decreaseFontSize = () => {
        setFontSize(prevSize => (prevSize > 10 ? prevSize - 2 : prevSize))
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <section className="pt-40">
            <div className='max-w-6xl mx-auto px-2 flex flex-col items-center'>
                <h3 className="text-3xl text-white font-bold max-w-3xl mb-2">Linh Sư - Mạn Mạn Hà Kỳ Đa</h3>
                <p className="text-gray-400 text-xl block max-w-3xl mb-2 text-center">
                    Chương 1: Kỳ án căn phòng kín
                </p>
                <div className="top-1/2 fixed max-w-7xl w-full mx-auto flex flex-col items-end ">
                    <TooltipProvider>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <div className='flex flex-col gap-1'>
                                    <Button className='bg-slate-700' size="icon" onClick={increaseFontSize}>
                                        <TriangleUpIcon className="h-7 w-7" />
                                    </Button>
                                    <Button className='bg-slate-700' size="icon" onClick={decreaseFontSize}>
                                        <TriangleDownIcon className="h-7 w-7" />
                                    </Button>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Đổi cỡ chữ</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <ButtonChapter />
                <hr className="bg-white max-w-6xl w-full mx-auto my-2" />
                {/* <p className='pt-10 text-justify leading-[1.5]' style={{ fontSize: `${fontSize}px` }}></p> */}

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
