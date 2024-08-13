export const metadata = {
  title: 'Home - Stone Novels',
  description: 'Home page of stone novels',
}

import Top4Book from '@/components/home/top4-books'
import BestCategory from '@/components/home/best-category'
import BestOfMonth from '@/components/home/best-of-month'
import Newest from '@/components/home/newest'
import Search from '@/components/home/search'
import Books from '@/components/home/books'

export default function Home() {
  return (
    <>
      <Search />
      <Top4Book />
      <BestCategory />
      <BestOfMonth />
      <Newest />
      <Books/>
    </>
  )
}
