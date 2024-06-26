export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import MapSection from '@/cms/blocks/blocksComponents/MapSection/MapSection'

import Image from 'next/image'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

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
    <main className="w-full flex flex-col justify-center items-center bg-[#F4EDDC]">
      <h2 className="flex gap-2 items-center justify-center font-bold text-[32px] my-[70px]">
        <Image
          alt="miniLogo"
          src={MiniLogoSvg}
          width="20"
          height="32"
          className="object-scale-down"
        />
        Găsește-ne la adresele
      </h2>
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'mapSection') {
          return <MapSection blockData={block} key={index} />
        }
      })}
    </main>
  )
}
