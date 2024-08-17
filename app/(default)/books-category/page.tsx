export const metadata = {
  title: 'Sách theo thể loại',
  description: 'Trang sách theo thể loại',
}

import BooksCategory from "@/components/books-category/books-category"
import { Suspense } from "react"
import Loading from "@/components/loading"

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BooksCategory  />
    </Suspense>

  )
}