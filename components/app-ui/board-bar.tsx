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
                    href="/books-library"
                    className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                    Thư viện
                </Link>
            </li>
            <li>
                <Link
                    href="/follow"
                    className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                    Theo dõi
                </Link>
            </li>
            <li>
                <Link
                    href="/history"
                    className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                    Vừa xem
                </Link>
            </li>
        </ul>
    )
}
