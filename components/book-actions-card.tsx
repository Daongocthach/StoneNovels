import React from 'react';
import Image from 'next/image'
import image from '@/public/images/bookexample.jpg'
import { Pencil1Icon, TrashIcon, HeartFilledIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button'

interface ListActionsCardProps {
    is_library: boolean;
    is_follow: boolean;
    is_history: boolean;
}

const BookActionsCard: React.FC<ListActionsCardProps> = ({ is_library, is_follow, is_history }) => {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-6 rounded-md bg-slate-800 p-1'>
            <div className='col-span-1'>
                <Image src={image} alt='image' className='brightness-90 w-40 aspect-[1/1.5] rounded-md' />
            </div>
            <div className='col-span-4 flex flex-col justify-center'>
                <div className="mb-3">
                    <h3 className="text-2xl text-white font-bold mb-2 line-clamp-1">Fate Stay Night: Unlimited Blade</h3>
                    <span className="text-gray-400 text-sm block">Feito／sutei naito</span>
                </div>
                <p className='line-clamp-3'>
                    Every human inhabiting the world of Alcia is branded by a “Count” or a number written on
                    their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss,
                    never to be seen again. But her mother’s last words send Hina on a quest to find a
                    legendary hero from the Waste War - the fabled Ace!
                </p>
                <div className='flex flex-row gap-2 pt-2'>
                    {is_library && <Button className='bg-red-600 text-white'>
                        <Pencil1Icon className="h-4 w-4" /> Sửa
                    </Button>}
                    {is_library && <Button className='bg-gray-600 text-white'>
                        <TrashIcon className="h-4 w-4" /> Xóa
                    </Button>}
                    {(is_follow || is_history) && <Button className='bg-red-600 text-white'>
                        Xem
                    </Button>}
                    {is_history && <Button className='bg-gray-600 text-white'>
                        Đọc tiếp
                    </Button>}
                    {is_follow && <Button className='bg-gray-600 text-white'>
                        Bỏ theo dõi
                    </Button>}
                </div>

            </div>
            <div className='col-span-1 flex flex-row flex-wrap gap-5 h-full items-start pt-7'>
                <div className='flex flex-row items-center gap-1'>
                    <HeartFilledIcon className="h-4 w-4" /> 5
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <EyeOpenIcon className="h-4 w-4" /> 1243
                </div>
            </div>
        </div>
    );
};

export default BookActionsCard