'use client'
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import categoryApi from "@/app/api/category-api"
import { useState, useEffect } from "react"
import { Category } from "@/app/types/category"

export default function DropdownMenu() {
    const [categories, setCategories] = useState<Category[]>([])
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
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className="text-lg font-medium text-orange-500 hover:text-gray-300 py-3 flex items-center transition duration-150 ease-in-out mr-3 gap-2"
                >
                    Thể loại
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
            </PopoverTrigger>
            <PopoverContent className="bg-gray-900 w-max" align="start">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {(Array.isArray(categories) && categories.length > 0) ?
                        categories.map((category: Category, index: number) => (
                            <div key={index} className="space-y-2" >
                                <p className="text-sm text-muted-foreground">
                                    {category.name}
                                </p>
                            </div>
                        ))
                        : <p className="text-muted-foreground">Không tìm thấy thể loại nào !</p>
                    }
                </div>
            </PopoverContent>
        </Popover>
    )
}
