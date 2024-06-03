/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import configPromise from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import './custom.scss'
import './globals.css'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => {
  return (
    <html className={inter.className}>
      <body>
        <RootLayout config={configPromise}>{children}</RootLayout>
      </body>
    </html>
  )
}

export default Layout
