import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const GeneralSans = localFont({
  src: [
    {
      path: '../../../public/fonts/GeneralSans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/GeneralSans-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../../public/fonts/GeneralSans-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--General-Sans',
})

const Switzer = localFont({
  src: [
    {
      path: '../../../public/fonts/Switzer-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Switzer-Medium.ttf',
      weight: '500',
    },
  ],
  variable: '--Switzer',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={`${GeneralSans.variable} ${Switzer.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
