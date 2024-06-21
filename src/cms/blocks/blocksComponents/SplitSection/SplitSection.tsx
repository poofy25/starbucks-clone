import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

export default function SplitSection({ blockData }: { blockData: any }) {
  return (
    <div
      style={{ backgroundColor: blockData.backgroundColor }}
      className={`  flex flex-col w-[85vw] justify-center items-center bg-white rounded-[30px]  overflow-hidden
      laptop:aspect-[2.5/1] laptop:gap-[30px] laptop:flex-row laptop:w-[70vw] laptop:min-w-[864px] desktop:w-[1410px] desktop:h-[566px]
      ${
        blockData.invertPosition
          ? 'flex-col-reverse laptop:flex-row-reverse'
          : 'flex-col laptop:flex-row'
      }`}
    >
      {/* TEXT COMPONENT */}
      <div
        className="w-full h-full p-8 flex flex-col justify-center items-center  box-border
      laptop:px-[2.5vw] laptop:w-[50%] laptop:items-start desktop:p-[86px]
      "
      >
        <div className="flex gap-2 justify-center items-center desktop:mb-2">
          <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />
          <p className="text-[22px]">Perfect oricând</p>
        </div>
        <h2 className="text-[28px] text-center font-bold laptop:text-[28px] desktop:text-[42px]">
          {blockData.title}
        </h2>
        <p
          className="text-[16px] my-6 text-center
        laptop:my-4 laptop:text-[16px] laptop:text-start desktop:my-8 desktop:text-[18px]"
        >
          {blockData.description}
        </p>
        <Link
          className="text-md font-[500] rounded-full px-6 py-4 bg-brand_red text-white flex justify-center items-center
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
    </div>
  )
}
