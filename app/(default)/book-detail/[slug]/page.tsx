
import Detail from "@/components/book-detail/detail"
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Detail slug={params?.slug}/>
    </>

  )
}