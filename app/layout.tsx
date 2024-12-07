import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/app-ui/header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Stone Novels',
  description: 'Stone Novels là trang web đọc truyện online miễn phí',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="max-w-6xl mx-auto sm:px-6 px-2 lg:px-0">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
