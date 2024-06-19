'use server'
import SplitSection from './SplitSection'
import ImageSwipper from '@/cms/blocks/blocksComponents/ImageSwipper/ImageSwipper'
import PartnersSection from '@/cms/blocks/blocksComponents/PartersSection/PartnersSection'

export default async function HomePageContent({ pageData }: { pageData: any }) {
  return (
    <section className="flex flex-col">
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'imageSwipper') {
          return <ImageSwipper blockData={block} key={index} />
        }
      })}
      <div className="flex flex-col items-center justify-center gap-[72px] pt-[72px] box-border bg-[#F4EDDC]">
        {pageData.blocks.map((block: any, index: number) => {
          if (block.blockType === 'splitSection') {
            return <SplitSection blockData={block} key={index} />
          }
          if (block.blockType === 'partnersSection') {
            return <PartnersSection blockData={block} key={index} />
          }
        })}
      </div>
    </section>
  )
}
