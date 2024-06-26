'use server'
import SplitSection from '@/cms/blocks/blocksComponents/SplitSection/SplitSection'
import ImageSwipper from '@/cms/blocks/blocksComponents/ImageSwipper/ImageSwipper'
import PartnersSection from '@/cms/blocks/blocksComponents/PartersSection/PartnersSection'

export default async function HomePageContent({ pageData }: { pageData: any }) {
  return (
    <main className="flex flex-col">
      {/* SWIPPER */}
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'imageSwipper') {
          return <ImageSwipper blockData={block} key={index} />
        }
      })}

      {/* SPLIT & PARTNERS SECTIONS */}
      <div className="bg-[#F4EDDC]">
        <section
          className="site-container flex flex-col items-center justify-center px-[15px] box-border
          gap-[70px] py-[70px]
          laptop:py-[35px]
          tablet:gap-[35px]
          "
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
