import { ref as dbRef, set, push, get, remove, update } from "firebase/database"
import { database } from '@/firebase'
import { Category } from '@/app/types'

export async function addCategory(categoryData: { name: string; slug: string }) {
    try {
      const newCategoryRef = push(dbRef(database, 'categories'))
      const newCategoryId = newCategoryRef.key
      await set(newCategoryRef, {
        id: newCategoryId,
        name: categoryData.name,
        slug: categoryData.slug,
      })
      console.log("Category added successfully!")
      return { id: newCategoryId, ...categoryData }
    } catch (error) {
      console.error("Error adding category: ", error)
      throw error 
    }
  }

export async function updateCategory(categoryId: string, categoryData: { name: string; slug: string }) {
  try {
    const categoryRef = dbRef(database, `categories/${categoryId}`)
    await update(categoryRef, {
      name: categoryData.name,
      slug: categoryData.slug,
    })
    console.log("Category updated successfully!")
  } catch (error) {
    console.error("Error updating category: ", error)
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const categoriesRef = dbRef(database, 'categories')
    const snapshot = await get(categoriesRef)

    if (snapshot.exists()) {
      const categoriesData = snapshot.val()
      const categoriesList: Category[] = Object.keys(categoriesData).map(key => ({
        id: key,
        ...categoriesData[key],
      }))

      return categoriesList
    } else {
      console.log("No categories found.")
      return []
    }
  } catch (error) {
    console.error("Error retrieving categories: ", error)
    return []
  }
}

export async function deleteCategory(categoryId: string) {
  try {
    const categoryRef = dbRef(database, `categories/${categoryId}`)
    await remove(categoryRef)
    console.log("Category deleted successfully!")
  } catch (error) {
    console.error("Error deleting category: ", error)
  }
}
