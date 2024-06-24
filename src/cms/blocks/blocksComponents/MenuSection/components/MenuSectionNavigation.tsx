'use client'
import Link from 'next/link'

export default function MenuSectionNavigation({ menuCategories }: { menuCategories: any }) {
  console.log(menuCategories)
  return (
    <div className=" bg-white sticky top-[118px] py-4 overflow-x-auto">
      <div className="site-container flex gap-8 overflow-x-auto">
        {menuCategories.map((category: any, index: number) => (
          <Link className="bg-black text-white px-4 py-2" href={`#${category.name}`} key={index}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
