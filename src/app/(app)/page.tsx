export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import HomePageContent from '@/components/HomePage'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mozza',
  description: 'Mozza Description',
}

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })

  const data = await payload.find({
    collection: 'pages',
    where: {
      title: {
        equals: 'Home',
      },
    },
  })

  console.log(data)

  return (
    <>
      <HomePageContent pageData={data.docs[0]} />
    </>
  )
}
