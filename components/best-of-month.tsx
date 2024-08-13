import Image from 'next/image'
import image from '@/public/images/bookexample.jpg'
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BestOfMonth() {
  return (
    <section>
      <div className='pt-10 max-w-6xl mx-auto '>
        {/* Category Name */}
        <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
          <h3 className="text-2xl">Hot nhất tháng</h3>
          <ChevronDownIcon className="h-8 w-6" />
        </div>
        <div className="pt-2 sm:px-2 flex flex-col items-center">
          <div className="w-full relative">
            <Carousel
              opts={{
                align: "start",
              }}
              className="lg:w-full"
            >
              <CarouselContent className="pl-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  >
                    <Image
                      className="w-full h-auto max-w-[222px] aspect-[1/1.5] rounded-xl cursor-pointer brightness-90"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
              />
              <CarouselNext
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
              />
            </Carousel>
          </div>
        </div>


      </div>
    </section>
  )
}
