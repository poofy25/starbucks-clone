/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

export default function MenuSectionCategoryProduct({ productData }: { productData: any }) {
  return (
    <div className="flex flex-col flex-[0_0_calc(33.33%-20px)]  bg-white max-w-[450px] rounded-[30px] overflow-hidden">
      {/* IMAGE */}
      <div className="w-full aspect-[3/2] relative">
        {productData.image.url && (
          <Image
            src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${productData.image.url}`}
            alt="product image"
            fill
          />
        )}
        {/* <img
          className="classname"
          src={`${productData.image.url}`}
          alt="product image"
          width="275"
          height="275"
        /> */}
      </div>
      {/* TEXT DATA */}
      <div className="flex flex-col flex-1 gap-[20px] p-[25px] w-full">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full gap-[15px]">
          <div className="flex justify-center items-center gap-2">
            <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />
            <h4 className="text-[22px] font-[600]">{productData.name}</h4>
          </div>
          {productData.weight && (
            <p className="min-w-[40px] font-[500] text-[#999]">{productData.weight}</p>
          )}
        </div>
        <p>{productData.description}</p>
        <p className="text-[20px] text-brand_red font-bold mt-auto">{productData.price} lei</p>
      </div>
    </div>
  )
}
