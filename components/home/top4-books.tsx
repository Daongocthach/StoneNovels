import CardBook from '@/components/card-book'

export default function Top4Book() {
  return (
    <section>
      <div className="pt-5 max-w-6xl mx-auto sm:px-6 gap-6 flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="flex flex-row justify-between lg:gap-3 lg:flex-col items-end flex-grow-0 w-full lg:w-fit px-2">
          <h3 className="text-2xl w-60 lg:text-right">Sách theo xu hướng mới nhất</h3>
          <p className="button border-2 text-md rounded-xl inline px-2 py-1 mr-1">Thêm</p>
        </div>
        {/* Image */}
        <div className="flex flex-row items-center gap-3 px-1 w-full" >
          <div className='w-[22.5%] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'}/>
          </div>
          <div className='w-[22.5%] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'}/>
          </div>
          <div className='w-[22.5%] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'}/>
          </div>
          <div className='w-[22.5%] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'}/>
          </div>
        </div>
      </div>
    </section>
  )
}
