import HomePageContent from '@/components/HomePage'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

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
      <Navbar />
      <HomePageContent pageData={data.docs[0]} />
      <Footer />
    </>
  )
}
