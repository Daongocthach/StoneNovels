'use client'
import { useEffect, useState } from 'react'
import { getCategories, addCategory, updateCategory, deleteCategory } from '@/app/api/category-fire-api'
import { Category } from '@/app/types'
import DialogCategory from '@/components/category/dialog-category'
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([
    { id: '', name: '', slug: '' },
  ])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData || [])
      } catch (error) {
        console.error('Error fetching categories: ', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategories()
  }, [])

  const handleAddCategory = async (name: string, slug: string) => {
    if (!name || !slug) {
      toast.error('Vui lòng nhập tên và slug!')
      return
    }
    setIsLoading(true)
    try {
      const newCategory = await addCategory({ name, slug })
      setCategories((prevCategories) => [...prevCategories, newCategory] as Category[])
      toast.success('Thêm danh mục thành công!')
    } catch (error) {
      toast.error('Thêm danh mục thất bại!')
      console.error('Error adding category: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateCategory = async (id: string, name: string, slug: string) => {
    if (!id || !name || !slug) {
      toast.error('Vui lòng điền đủ thông tin!')
      return
    }
    setIsLoading(true)
    try {
      await updateCategory(id, { name, slug })
      const editingCategory = { id, name, slug }
      setCategories((prevCategories) =>
        prevCategories.map((category) => (category.id === id ? editingCategory : category))
      )
      toast.success('Cập nhật danh mục thành công!')
    } catch (error) {
      toast.error('Cập nhật danh mục thất bại!')
      console.error('Error updating category: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteCategory = async (categoryId: string) => {
    setIsLoading(true)
    try {
      await deleteCategory(categoryId)
      setCategories((prevCategories) => prevCategories.filter((category) => category.id !== categoryId))
      toast.success('Xóa thành công!')
    } catch (error) {
      toast.error('Xóa thất bại!')
      console.error('Error deleting category: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) { return <p>Đang tải...</p> }

  return (
    <section>
      <div className='max-w-6xl mx-auto '>
        <div className='flex flex-row justify-between'>
          <h1 className="text-2xl font-bold mb-4">Danh sách danh mục</h1>
          <DialogCategory
            isAdd={true}
            handleAddCategory={handleAddCategory}
          />
        </div>
        <ul className='mt-4'>
          {categories.map((category) => (
            <li key={category.id} className="mb-2 p-2 border border-gray-300 rounded-md flex items-center justify-between">
              <span>
                <strong>{category.name}</strong>
              </span>
              <div>
                <DialogCategory updateCategory={category} handleUpdateCategory={handleUpdateCategory} />
                <Dialog>
                  <DialogTrigger>
                    <div className="ml-2 p-2 bg-red-500 text-white rounded">Xóa</div>
                  </DialogTrigger>
                  <DialogContent className='bg-gray-800'>
                    <DialogHeader>
                      <DialogTitle>Xóa thể loại này?</DialogTitle>
                      <DialogDescription>
                        Bạn chắc chắn xóa, không thể hoàn tác!
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit" className='bg-gray-700' onClick={() => handleDeleteCategory(category.id)}>Xóa</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
