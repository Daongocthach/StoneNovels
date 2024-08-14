
import Detail from "@/components/book-detail/detail"
import Comments from "@/components/book-detail/comments"
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Detail slug={params?.slug}/>
      <Comments/>
    </>

  )
}