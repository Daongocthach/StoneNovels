'use client'

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import image from '@/public/images/removeBackground.png'
import Search from '@/components/app-ui/search'
import BoardBar from '@/components/app-ui/board-bar'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useRouter } from 'next/navigation'
import useStore from '@/app/store'

export default function Header() {
  const router = useRouter()
  const { isLoggedIn, logOut } = useStore()
  const handleLogout = () => {
    logOut()
    router.push('/')
  }

  return (
    <header>
      <div>
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 flex flex-row items-center">
            <Link href="/" className="flex flex-row gap-2 items-center mr-4" aria-label="Cruip">
              <svg className="w-14 h-14" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.5 46.5C89.5 70.8261 69.999 90.5 46 90.5C22.001 90.5 2.5 70.8261 2.5 46.5C2.5 22.1739 22.001 2.5 46 2.5C69.999 2.5 89.5 22.1739 89.5 46.5Z" stroke="url(#paint0_linear_1_90)" strokeWidth="5" />
                <image x="21" y="21" width="50" height="50" href={image.src} />
                <defs>
                  <linearGradient id="paint0_linear_1_90" x1="46" y1="0" x2="46" y2="93" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B3239C" stopOpacity="0.82" />
                    <stop offset="0.519556" stopColor="#2E2D5B" />
                    <stop offset="1" stopColor="#ADA8AC" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-3xl text-gradient text-nowrap">Stone Novels</h3>
            </Link>
            <div className="hidden md:flex">
              <Search />
            </div>
          </div>
          <nav className="hidden md:flex md:grow ">
            <ul className="flex grow justify-end flex-wrap items-center">
              {!isLoggedIn && (
                <>
                  <li>
                    <Link
                      href="/signin"
                      className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Đăng nhập
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="text-lg font-medium text-white hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Đăng ký
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li>
                  <Popover>
                    <PopoverTrigger>
                      <HamburgerMenuIcon className="h-6 w-6 fill-current text-white hover:text-gray-300 transition duration-150 ease-in-out" />
                    </PopoverTrigger>
                    <PopoverContent className="bg-black flex flex-col items-start gap-2 w-fit">
                      <Link
                        href="/profile"
                        className="font-medium text-white hover:text-gray-300"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="font-medium text-white hover:text-gray-300"
                      >
                        Đăng xuất
                      </button>
                    </PopoverContent>
                  </Popover>
                </li>
              )}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
      <div className="w-full bg-gray-800 rounded-md">
        <nav className="px-2 mx-auto hidden md:flex md:grow ">
          <BoardBar />
        </nav>
      </div>
    </header>
  )
}
