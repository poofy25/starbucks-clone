import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

export default function SplitSection({ blockData }: { blockData: any }) {
  return (
    <div
      style={{ backgroundColor: blockData.backgroundColor }}
      className={` h-[566px] flex justify-center items-center w-[1410px] bg-white rounded-[30px] gap-[30px] overflow-hidden
      ${blockData.invertPosition ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className="w-[50%] h-full flex flex-col justify-center items-start p-[86px] box-border">
        <div className="flex gap-2 justify-center items-center mb-2">
          <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />
          <p className="text-[22px]">Perfect oricând</p>
        </div>
        <h2 className="text-[42px] font-bold">{blockData.title}</h2>
        <p className="text-[18px] my-8">{blockData.description}</p>
        <Link
          className="text-md font-[500] border border-solid rounded-full px-6 py-4 bg-brand_red text-white flex justify-center items-center"
          href="#"
        >
          {blockData.buttonText}
        </Link>
      </div>
      <Image
        className="h-full w-[50%] object-cover"
        src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${blockData.image.url}`}
        alt="img"
        width="400"
        height="400"
      />
    </div>
  )
}
