'use client'
import { useState } from 'react'
import image from '@/public/images/bookexample.jpg'
import Image from 'next/image'
function Detail() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const handleReadMoreToggle = (): void => {
        setIsExpanded(prevState => !prevState)
    }
    return (
        <section className="pt-32">
            <div className=" max-w-6xl mx-auto px-1 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <Image src={image} alt='image' className='brightness-90 mb-2' />
                    <div className='flex gap-2 p-2'>
                        <button className="btn text-white bg-red-600 hover:bg-red-500 whitespace-nowrap px-4 py-2 text-sm">
                            Yêu thích
                        </button>
                        <button className="btn text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 text-sm lg:w-full">
                            Đọc
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-3 border-l-[1px] border-white pl-10">
                    <div className="mb-5">
                        <h3 className="text-3xl text-white font-bold mb-3">Fate Stay Night: Unlimited Blade</h3>
                        <span className="text-gray-400 text-sm block">Feito／sutei naito</span>
                    </div>
                    <p className={`text-gray-400 text-lg leading-7 transition-max-height duration-300 ease-in-out 
                        ${isExpanded ? 'max-h-full' : 'max-h-24 line-clamp-3'}`}>
                        Every human inhabiting the world of Alcia is branded by a “Count” or a number written on
                        their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss,
                        never to be seen again. But her mother’s last words send Hina on a quest to find a
                        legendary hero from the Waste War - the fabled Ace!
                        Every human inhabiting the world of Alcia is branded by a “Count” or a number written on
                        their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss,
                        never to be seen again. But her mother’s last words send Hina on a quest to find a
                        legendary hero from the Waste War - the fabled Ace!
                    </p>
                    <button
                        onClick={handleReadMoreToggle}
                        className="text-blue-500 mt-2 focus:outline-none"
                    >
                        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                    </button>
                    <div className="mt-8">
                        <div className="grid grid-cols-1">
                            <ul className="space-y-2">
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Thể loại:</span> Hành động, Drama, Tình cảm, Hài hước
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Nguồn:</span> Sưu tầm
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Ngày đăng:</span> Oct 02, 2019
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Trạng thái:</span> Chưa full
                                </li>
                                <li className="text-white text-base relative pl-5">
                                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    <span className="text-gray-400 inline-block w-28">Số chương:</span> 137
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail