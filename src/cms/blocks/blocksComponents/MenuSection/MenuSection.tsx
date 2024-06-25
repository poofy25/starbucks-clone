import MenuSectionNavigation from './components/MenuSectionNavigation'
import MenuSectionCategorySection from './components/MenuSectionCategorySection'

export default function MenuSection({ menuData }: { menuData: any }) {
  console.log(menuData)
  return (
    <section className="w-full">
      <MenuSectionNavigation menuCategories={menuData.categories} />
      <div className="flex flex-col gap-[100px] py-[50px]">
        {menuData.categories.map((category: any, index: number) => (
          <MenuSectionCategorySection category={category} key={index} />
        ))}
      </div>
    </section>
  )
}
