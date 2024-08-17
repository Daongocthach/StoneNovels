export const metadata = {
  title: 'Chương sách',
  description: 'Trang chương sách',
}
import Content from "@/components/chapter/content"
import { Suspense } from "react"
import Loading from "@/components/loading"
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>

  )
}