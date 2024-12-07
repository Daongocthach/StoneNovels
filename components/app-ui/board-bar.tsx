import React from 'react'
import DropdownMenu from '@/components/dropdown-menu'
import Link from 'next/link'
import useStore from '@/app/store'

export default function BoardBar() {
    const { isLoggedIn } = useStore()
    return (
        <ul className="flex grow flex-wrap items-center">
            <li>
                <DropdownMenu isMenu={false} />
            </li>
            {isLoggedIn && <>
                <li>
                    <Link
                        href="/manage-book"
                        className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                        Quản lý sách
                    </Link>
                </li>
                <li>
                    <Link
                        href="/add-book"
                        className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                        Thêm sách
                    </Link>
                </li>
                <li>
                    <Link
                        href="/manage-category"
                        className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                        Quản lý thể loại
                    </Link>
                </li>
            </>}
        </ul>
    )
}
