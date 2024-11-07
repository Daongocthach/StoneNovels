import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { Category } from "@/app/types"
import { getCategories } from "@/app/api/category-fire-api"
import { CrossCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons"

type BookSelectCategoryProps = {
    categoriesSelected: Category[]
    setCategoriesSelected: (categories: Category[]) => void
}

function BookSelectCategory({ categoriesSelected, setCategoriesSelected }: BookSelectCategoryProps) {
    const [categories, setCategories] = useState<Category[]>([{ id: '', name: '', slug: '' }])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories()
                setCategories(categoriesData || [])
            } catch (error) {
                console.error('Error fetching categories: ', error)
            }
        }
        fetchCategories()
    }, [])

    const onToggleCategory = (category: Category) => {
        if (categoriesSelected.includes(category)) {
            setCategoriesSelected(categoriesSelected.filter(item => item.id !== category.id))
        } else {
            setCategoriesSelected([...categoriesSelected, category])
        }
    }
    const handleRemoveCategory = (category: Category) => {
        setCategoriesSelected(categoriesSelected.filter(item => item.id !== category.id))
    }
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Chọn danh mục</Button>
                </PopoverTrigger>
                <PopoverContent className="w-full bg-gray-700">
                    <ul>
                        {Array.isArray(categories) && categories.length > 0 && categories.map((category) => (
                            <li key={category.id}
                                className={`${categoriesSelected.includes(category)
                                    ? "text-gray-600"
                                    : "text-white "
                                    } p-2 rounded-md cursor-pointer flex flex-row justify-between items-center`}
                                onClick={() => onToggleCategory(category)}
                            >
                                {category.name}
                                {
                                    categoriesSelected.includes(category) ?
                                    <CrossCircledIcon className="text-white ml-2"/>
                                    : <PlusCircledIcon className="text-white ml-2"/>

                                }
                            </li>
                        ))}
                    </ul>
                </PopoverContent>
            </Popover>
            <div className="mt-2 flex flex-row items-center py-2 px-4 bg-gray-700">
                {categoriesSelected.length > 0 ? (
                    <div className="flex flex-row items-center">
                        <span className="text-white">Đã chọn ({categoriesSelected.length || 0}): </span>
                        {categoriesSelected.map((category, index) => (
                            <div key={index} className="flex flex-row items-center">
                                <span className="text-gray-300 ml-2">{category.name}</span>
                                <CrossCircledIcon className="cursor-pointer ml-2 mt-0.5" onClick={() => handleRemoveCategory(category)} />
                                {index < categoriesSelected.length - 1 && <span className="text-white ml-2"> - </span>}
                            </div>
                        ))}
                    </div>
                ) : (
                    <span className="text-white">Chưa chọn danh mục!</span>
                )}
            </div>
        </div>
    )
}

export default BookSelectCategory
