import CardBook from '@/components/card-book'

export default function Top5Books() {
  return (
    <section>
      <div className='pt-32 max-w-6xl sm:px-6 px-2 mx-auto '>
        {/* Category Name */}
        <h3 className="text-2xl mb-4">Top 5 sách được xem nhiều nhất</h3>
        {/* Image */}
        <div className="flex flex-row items-center gap-2 px-1 w-full" >
          <div className='w-[calc(20%-8px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='w-[calc(20%-8px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='w-[calc(20%-8px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='w-[calc(20%-8px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='w-[calc(20%-8px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
        </div>
      </div>
    </section>
  )
}
