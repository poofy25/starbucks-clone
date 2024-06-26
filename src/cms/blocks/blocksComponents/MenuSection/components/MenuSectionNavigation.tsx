'use client'
import Link from 'next/link'

export default function MenuSectionNavigation({ menuCategories }: { menuCategories: any }) {
  console.log(menuCategories)
  return (
    <div
      className=" bg-white sticky top-[103px] py-[15px] overflow-x-auto z-10 border-0 border-b border-solid border-black
    tablet:top-[95px] 
    mobile:top-[55px]
    "
    >
      <div
        className="site-container flex justify-center items-center gap-[50px] overflow-x-auto
      tablet:justify-start
      "
      >
        {menuCategories.map((category: any, index: number) => (
          <Link
            className="text-[14px] font-[500] whitespace-nowrap"
            href={`#${category.name}`}
            key={index}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
