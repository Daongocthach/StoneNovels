import Link from 'next/link'
import MobileMenu from './mobile-menu'
import image from '@/public/images/removeBackground.png'
import Search from '@/components/app-ui/search'
import BoardBar from '@/components/app-ui/board-bar'

export default function Header() {
  return (
    <header className="absolute w-full z-30 ">
      <div className="max-w-6xl mx-auto sm:px-6 px-2 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 flex flex-row items-center">
            {/* Logo */}
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
              <h3 className='text-3xl text-gradient text-nowrap'>Stone Novels</h3>
            </Link>
            <div className='hidden md:flex'>
              <Search />
            </div>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow ">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
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
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
      <div className="w-full bg-gray-800">
        <nav className="max-w-6xl sm:px-6 px-2 lg:px-0 mx-auto hidden md:flex md:grow ">
          {/* Desktop sign in links */}
          <BoardBar />
        </nav>
      </div>
    </header>
  )
}
