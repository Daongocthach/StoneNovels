import image from '@/public/images/bookexample.jpg'
import Image from 'next/image'
function Comments() {
    return (
        <section className="pt-10">
            <hr className="bg-white max-w-6xl mx-auto" />
            <div className="pt-10 max-w-6xl mx-auto px-1 sm:px-6 grid grid-cols-1 lg:grid-cols-8 gap-8">
                <div className="lg:col-span-6">
                    <div className="mb-14">
                        <h5 className='h4 mb-5'>Bình luận</h5>
                        <div className="space-y-6">
                            <div className="flex flex-row items-center">
                                <div className="relative flex-shrink-0">
                                    <Image src={image} alt="Review" className="h-12 w-12 rounded-full object-cover" />
                                    <div className="absolute right-[-30px] top-4 w-4 h-4 bg-dark-500 transform rotate-45"></div>
                                </div>
                                <div className="bg-dark-500 rounded-xl p-4">
                                    <h6 className="text-white font-semibold mb-2">Chris Curry - <span className="text-gray-400 font-normal">1 Hour ago</span></h6>
                                    <p className="text-gray-400 text-sm">whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-row items-center">
                                <div className="relative flex-shrink-0">
                                    <Image src={image} alt="Review" className="h-12 w-12 rounded-full object-cover" />
                                    <div className="absolute right-[-30px] top-4 w-4 h-4 bg-dark-500 transform rotate-45"></div>
                                </div>
                                <div className="bg-dark-500 rounded-xl p-4">
                                    <h6 className="text-white font-semibold mb-2">Chris Curry - <span className="text-gray-400 font-normal">1 Hour ago</span></h6>
                                    <p className="text-gray-400 text-sm">whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="text-lg font-semibold mb-5">
                        <h5>Truyện liên quan</h5>
                    </div>
                    <ul className="space-y-4">
                        <li className="text-sm text-gray-400 hover:text-white">Fullmetal Alchemist: Brotherhood</li>
                        <li className="text-sm text-gray-400 hover:text-white">Gintama</li>
                        <li className="text-sm text-gray-400 hover:text-white">Hunter x Hunter</li>
                        <li className="text-sm text-gray-400 hover:text-white">Shingeki no Kyojin</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Comments