import { Suspense } from "react"
import Loading from "@/components/loading"
import CategoryList from "@/components/category/category-list"

export const metadata = {
  title: 'Quản lý danh mục',
  description: 'Quản lý danh mục',
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <section className="pt-40">
        <div className="container mx-auto px-4">
          <CategoryList />
        </div>
      </section>
    </Suspense>
  )
}
