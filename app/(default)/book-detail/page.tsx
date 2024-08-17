export const metadata = {
  title: 'Chi tiết sách',
  description: 'Trang chi tiết sách',
}

import Detail from "@/components/book-detail/detail"
import { Suspense } from "react"
import Loading from "@/components/loading"
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Detail />
    </Suspense>

  )
}