/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

export default function MenuSectionCategoryProduct({ productData }: { productData: any }) {
  return (
    <div className="flex flex-col flex-[1_1_calc(33.33%-32px)] gap-8 bg-white max-w-[450px] rounded-[30px] overflow-hidden">
      {/* IMAGE */}
      <div className="w-full aspect-[3/2] relative rounded-[30px] overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${productData.image.url}`}
          alt="product image"
          // width="450"
          // height="300"
          fill
        />
        {/* <img
          className="classname"
          src={`${productData.image.url}`}
          alt="product image"
          width="275"
          height="275"
        /> */}
      </div>
      {/* TEXT DATA */}
      <div className="flex flex-col flex-1 gap-8 p-8 pt-0 w-full">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full gap-4">
          <div className="flex justify-center items-center gap-4">
            <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />
            <h4 className="text-[24px] font-bold">{productData.name}</h4>
          </div>
          {productData.weight && <p className="min-w-[40px] opacity-70">{productData.weight}</p>}
        </div>
        <p>{productData.description}</p>
        <p className="text-[20px] text-brand_red font-bold mt-auto">{productData.price} lei</p>
      </div>
    </div>
  )
}
