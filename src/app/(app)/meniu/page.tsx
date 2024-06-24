export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import MenuSection from '@/cms/blocks/blocksComponents/MenuSection/MenuSection'

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })

  const data = await payload.find({
    collection: 'pages',
    depth: 3,
    where: {
      title: {
        equals: 'Meniu',
      },
    },
  })

  const pageData: any = data.docs[0]
  console.log(data, pageData)

  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#F4EDDC] ">
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'menuSection') {
          return <MenuSection menuData={block} key={index} />
        }
      })}
    </main>
  )
}
