import { Suspense } from "react"
import Loading from "@/components/loading"
import AddBookForm from "@/components/book/add-book-form"

export const metadata = {
  title: 'Thêm sách',
  description: 'Trang thêm sách',
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <div>
          <h1 className="text-2xl font-bold mb-4">Thêm sách mới</h1>
          <AddBookForm />
        </div>
      </section>
    </Suspense>
  )
}
