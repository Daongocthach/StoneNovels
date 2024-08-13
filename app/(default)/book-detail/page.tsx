import Detail from "@/components/book-detail/detail"
import Comments from "@/components/book-detail/comments"
import Chapters from "@/components/book-detail/chapters"

export default function page() {
  return (
    <>
      <Detail/>
      <Chapters/>
      <Comments/>
    </>

  )
}
