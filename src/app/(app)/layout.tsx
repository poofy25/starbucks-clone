import React from 'react'
import './globals.css'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'

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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mozza',
  description: 'Mozza Description',
}

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
