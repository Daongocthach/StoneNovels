export const metadata = {
  title: 'Home - Stone Novels',
  description: 'Home page of stone novels',
}

import BestCategory from '@/components/home/best-category'
import CompletedBook from '@/components/home/completed-book'
import Newest from '@/components/home/newest'
import Books from '@/components/home/books'

export default function Home() {
  return (
    <>
      <Newest />
      <BestCategory />
      <CompletedBook />
      <Books/>
    </>
  )
}
