import CardBook from "@/components/card-book"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export default function Books() {
  return (
    <section>
      <div className='pt-10 max-w-6xl mx-auto '>
        {/* Category Name */}
        <div className='w-full flex flex-row items-center gap-2 px-1 sm:px-5 py-2 bg-gray-800 rounded-md'>
          <h3 className="text-2xl">Danh sách truyện</h3>
          <ChevronDownIcon className="h-8 w-6" />
        </div>
        <div className="md:mb-0 flex flex-row items-center flex-1 gap-3 w-full flex-wrap px-1 pt-2" data-aos="fade-up">
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          <div className='min-w-[180px] w-[calc(16.6667%-12px)] aspect-[1/1.5] rounded-xl'>
            <CardBook title='Con ghẹ bị luộc chín' image_url={'https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/bookexample.jpg?alt=media&token=f2d0219a-a700-4cfd-98d8-57d79d397d85'} />
          </div>
          
        </div>
      </div>
    </section>
  )
}
