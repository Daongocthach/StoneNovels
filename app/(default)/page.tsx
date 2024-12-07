export const metadata = {
  title: 'Stone Novels',
  description: 'Stone Novels là trang web đọc truyện online miễn phí',
}

import BestCategory from '@/components/home/best-category'
import CompletedBook from '@/components/home/completed-book'
import Newest from '@/components/home/newest'
import Books from '@/components/home/books'

export default function Home() {
  return (
    <div className='mt-5'>
      <Newest />
      <BestCategory />
      <CompletedBook />
      <Books/>
    </div>
  )
}
