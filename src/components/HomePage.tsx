import SplitSection from './SplitSection'
import ImageSwipper from '@/cms/blocks/blocksComponents/ImageSwipper/ImageSwipper'

export default async function HomePageContent({ pageData }: { pageData: any }) {
  return (
    <section className="flex flex-col gap-8">
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'splitSection') {
          return <SplitSection blockData={block} key={index} />
        }
        if (block.blockType === 'imageSwipper') {
          return <ImageSwipper blockData={block} key={index} />
        }
      })}
    </section>
  )
}
