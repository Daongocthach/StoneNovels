'use client'
import { useEffect, useState } from 'react'
import { Category } from '@/app/types'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { convertToSlug } from '@/lib/utils'

type DialogCategoryProps = {
    isAdd?: boolean
    handleAddCategory?: (name: string, slug: string) => void
    updateCategory?: Category
    handleUpdateCategory?: (id: string, name: string, slug: string) => void
}

export default function DialogCategory({ isAdd, updateCategory, handleAddCategory, handleUpdateCategory }: DialogCategoryProps) {
    const [categoryName, setCategoryName] = useState<string>('')
    const [categorySlug, setCategorySlug] = useState<string>('')
    useEffect(() => {
        if (updateCategory)
            setCategoryName(updateCategory.name)
    }, [])
    const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(e.target.value)
        const slug = await convertToSlug(e.target.value)
        setCategorySlug(slug)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='text-white bg-gray-700'>{isAdd ? 'Thêm danh mục' : 'Cập nhật'}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{isAdd ? 'Thêm danh mục' : 'Cập nhật danh mục'}</DialogTitle>
                </DialogHeader>
                <input type="text" placeholder="Nhập tên danh mục" value={categoryName}
                    onChange={(e) => handleChangeInput(e)}
                    className="p-2 border border-gray-300 rounded mr-2 text-black" />
                <DialogFooter>
                    {isAdd ?
                        (handleAddCategory &&
                            <Button type="submit" className='bg-gray-700'
                                onClick={() => handleAddCategory(categoryName, categorySlug)}>Thêm</Button>)
                        :
                        (handleUpdateCategory &&
                            <Button type="submit" className='bg-gray-700'
                                onClick={() => handleUpdateCategory(updateCategory?.id || '', categoryName, categorySlug)}>
                                Cập nhật
                            </Button>)
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


