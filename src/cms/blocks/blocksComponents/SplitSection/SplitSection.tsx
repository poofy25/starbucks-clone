import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

export default function SplitSection({ blockData }: { blockData: any }) {
  return (
    <section
      style={{ backgroundColor: blockData.backgroundColor }}
      className={`flex flex-col-reverse w-full justify-center items-center bg-white rounded-[30px]  overflow-hidden
      laptop:aspect-[2.5/1] laptop:flex-row desktop:h-[566px]
      ${blockData.invertPosition ? 'laptop:flex-row-reverse' : 'laptop:flex-row'}`}
    >
      {/* TEXT COMPONENT */}
      <div
        className="w-full h-full p-[30px] flex flex-col justify-center items-center  box-border
      laptop:px-[2.5vw] laptop:w-[50%] laptop:items-start desktop:p-[70px]
      "
      >
        {/* Subtitle */}
        <div className="flex gap-2 justify-center items-center desktop:mb-2">
          <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />
          <p className="text-[20px]">Perfect oricând</p>
        </div>

        {/* Title */}
        <h2 className="text-[28px] text-center font-[600] laptop:text-[28px] desktop:text-[38px]">
          {blockData.title}
        </h2>

        {/* Paragraph */}
        <p
          className="text-[17px] my-6 text-center
        laptop:my-4 laptop:text-start desktop:my-8"
        >
          {blockData.description}
        </p>

        {/* CTA Button */}
        <Link
          className="ctaBtn text-md font-[500] rounded-full  bg-brand_red text-white flex justify-center items-center
          hover:bg-transparent hover:text-brand_red transition-all border border-solid border-brand_red
          "
          href="#"
        >
          {blockData.buttonText}
        </Link>
      </div>

      {/* IMAGE COMPONENT */}
      <Image
        className="h-full w-full laptop:w-[50%] object-cover"
        src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${blockData.image.url}`}
        alt="img"
        width="400"
        height="400"
      />
    </section>
  )
}
