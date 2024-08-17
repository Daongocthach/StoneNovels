'use client'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import categoryApi from "@/app/api/category-api"
import { useState, useEffect } from "react"
import { Category } from "@/app/types/category"
import { useRouter } from 'next/navigation'

export default function DropdownMenu({ isMenu }: { isMenu: boolean }) {
    const router = useRouter()
    const [categories, setCategories] = useState<Category[]>([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryApi.getCategories()
                setCategories(response?.data?.items)
            }
            catch (error) {
                console.log('Failed to fetch categories: ', error)
            }
        }
        fetchCategories()
    }, [])

    const handleClick = (category: string) => {
        router.push(`/books-category?category=${category}`)
        setOpen(false)
    }
    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    {isMenu ? (
                        <div className="w-full mb-2">
                            <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                                Thể loại
                                <ChevronDownIcon className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <div
                            role="button" aria-label="Some label"
                            className="text-lg font-medium text-orange-500 hover:text-gray-300 flex items-center gap-1 cursor-pointer"
                        >
                            Thể loại
                            <ChevronDownIcon className="h-4 w-4" />
                        </div>
                    )}
                </PopoverTrigger>
                <PopoverContent className="bg-gray-900 w-max" align="start">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {(Array.isArray(categories) && categories.length > 0) ?
                            categories.map((category: Category, index: number) => (
                                <div key={index} className="space-y-2 cursor-pointer" onClick={() => handleClick(category?.slug)}>
                                    <p className="text-sm flex-grow text-muted-foreground hover:text-orange-100">
                                        {category?.name}
                                    </p>
                                </div>
                            ))
                            : <p className="text-muted-foreground">Không tìm thấy thể loại nào !</p>
                        }
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
