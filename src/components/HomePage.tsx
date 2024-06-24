'use server'
import SplitSection from '@/cms/blocks/blocksComponents/SplitSection/SplitSection'
import ImageSwipper from '@/cms/blocks/blocksComponents/ImageSwipper/ImageSwipper'
import PartnersSection from '@/cms/blocks/blocksComponents/PartersSection/PartnersSection'

export default async function HomePageContent({ pageData }: { pageData: any }) {
  return (
    <main className="flex flex-col">
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'imageSwipper') {
          return <ImageSwipper blockData={block} key={index} />
        }
      })}
      <div
        className=" bg-[#F4EDDC]
      "
      >
        <section
          className="site-container flex flex-col items-center justify-center px-[15px] gap-[48px] pt-[48px] box-border
      laptop:gap-[72px] laptop:pt-[72px]"
        >
          {pageData.blocks.map((block: any, index: number) => {
            if (block.blockType === 'splitSection') {
              return <SplitSection blockData={block} key={index} />
            }
            if (block.blockType === 'partnersSection') {
              return <PartnersSection blockData={block} key={index} />
            }
          })}
        </section>
      </div>
    </main>
  )
}
