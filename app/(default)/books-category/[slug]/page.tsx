import BooksCategory from "@/components/books-category/books-category"

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <BooksCategory slug={params.slug} />
    </>

  )
}