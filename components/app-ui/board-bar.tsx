import React from 'react'
import DropdownMenu from '@/components/dropdown-menu'
import Link from 'next/link'

export default function BoardBar() {
    return (
        <ul className="flex grow flex-wrap items-center">
            <li>
                <DropdownMenu />
            </li>
            <li>
                <Link
                    href="/books-category/action"
                    className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                    Hành động
                </Link>
            </li>
            <li>
                <Link
                    href="/books-category/xuyen-khong"
                    className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                    Xuyên Không
                </Link>
            </li>
            <li>
                <Link
                    href="/books-category/shounen"
                    className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                    Thiếu niên
                </Link>
            </li>
        </ul>
    )
}
