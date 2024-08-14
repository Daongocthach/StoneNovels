
import React, { ReactNode } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselListBookProps {
    children: ReactNode;
}
const CarouselListBook: React.FC<CarouselListBookProps> = ({ children }: CarouselListBookProps) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="lg:w-full"
        >
            <CarouselContent className="pl-1">
                {children}
            </CarouselContent>
            <CarouselPrevious
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            />
            <CarouselNext
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            />
        </Carousel>
    )
}

export default CarouselListBook