import SplitSection from './SplitSection'

export default async function HomePageContent({ pageData }: { pageData: any }) {
  return (
    <section className="px-8 flex flex-col gap-8">
      {pageData.blocks.map((block: any, index: number) => {
        if (block.blockType === 'splitSection') {
          return <SplitSection blockData={block} key={index} />
        }
      })}
    </section>
  )
}
