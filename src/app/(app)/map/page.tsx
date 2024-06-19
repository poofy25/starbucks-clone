export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import MapSection from '@/cms/blocks/blocksComponents/MapSection/MapSection'

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })

  const data = await payload.find({
    collection: 'pages',
    where: {
      title: {
        equals: 'Map',
      },
    },
  })

  const pageData: any = data.docs[0]
  console.log(data, pageData) 

  return (
    <main className="w-full h-full">
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'mapSection') {
          return <MapSection blockData={block} key={index} />
        }
      })}
    </main>
  )
}
