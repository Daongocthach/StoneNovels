import CardBook from "@/components/card-book"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function BestCategory() {
  return (
    <section>
      <div className='pt-10 max-w-6xl mx-auto '>
        {/* Category Name */}
        <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
          <h3 className="text-2xl">Truyện thiếu niên</h3>
          <ChevronDownIcon className="h-8 w-6" />
        </div>
        <div className="pt-2 sm:px-2 gap-6 flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="flex flex-col gap-2 px-1 flex-1">
            <h3 className="text-xl font-bold">Norwegian Wood</h3>
            <p className="text-md rounded-md w-full line-clamp-2">Tôi cảm thấy như mình đã mất đi điều gì đó quan trọng và thay vì khóc, tôi đi lang thang khắp nơi trong cơn mưa lạnh buốt.
              Từ đó, cơn mưa không còn đơn thuần là mưa nữa - đó là thứ gì đó ý nghĩa hơn, mang màu sắc buồn thảm của sự chia xa.</p>
            {/* Button */}
            <div className='flex flex-row items-center gap-5'>
              <p className="button border-2 text-md rounded-md inline px-4 py-1 ">Đọc ngay</p>
              <p className="button border-2 text-md rounded-md inline px-4 py-1 ">Yêu thích</p>
            </div>
          </div>
          {/* Image */}
          <div className="md:mb-0 flex flex-row items-center flex-1 gap-3 w-full px-1 pt-2" data-aos="fade-up">
            <div className='w-[22.5%] aspect-[1/1.5] max-w-[200px] rounded-xl'>
              <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
            </div>
            <div className='w-[22.5%] aspect-[1/1.5] max-w-[200px] rounded-xl'>
              <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
            </div>
            <div className='w-[22.5%] aspect-[1/1.5] max-w-[200px] rounded-xl'>
              <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
            </div>
            <div className='w-[22.5%] aspect-[1/1.5] max-w-[200px] rounded-xl'>
              <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
