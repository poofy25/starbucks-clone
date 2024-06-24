'use client'
import Image from 'next/image'

export default function MenuSectionCategorySection({ category }: { category: any }) {
  console.log(category)
  const products = category.products
  return (
    <div id={category.name} className="site-container flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-[32px] font-bold">{category.name}</h2>
        <p>{category.description}</p>
      </div>
      <div className="flex gap-8 flex-wrap">
        {products.map((product: any, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-white max-w-[275px] rounded-[30px] overflow-hidden"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${product.image.url}`}
              alt="product image"
              width="275"
              height="275"
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-[24px] font-bold">{product.name}</h3>
              <h4 className="text-[20px]">{product.price} lei</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
