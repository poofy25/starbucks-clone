export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import MapSection from '@/cms/blocks/blocksComponents/MapSection/MapSection'

export default async function Page() {
  //   const payload = await getPayloadHMR({ config: configPromise })

  //   const data = await payload.find({
  //     collection: 'pages',
  //     where: {
  //       title: {
  //         equals: 'Home',
  //       },
  //     },
  //   })

  //   console.log(data)

  return (
    <main className="w-full h-full">
      <h2>Map page</h2>
      <MapSection />
    </main>
  )
}
