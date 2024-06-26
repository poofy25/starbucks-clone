import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

export default function SplitSection({ blockData }: { blockData: any }) {
  return (
    <section
      style={{ backgroundColor: blockData.backgroundColor }}
      className={`flex w-full justify-center items-center bg-white rounded-[30px]  overflow-hidden
      aspect-[2.5/1] flex-row 
      ${blockData.invertPosition ? 'flex-row-reverse' : 'flex-row'}
      tablet:flex-col-reverse tablet:aspect-[unset]
      `}
    >
      {/* TEXT COMPONENT */}
      <div
        className="h-full flex flex-col justify-center box-border w-[50%] items-start p-[35px] px-[70px]
        desktop_sm:px-[50px]
        laptop:px-[35px]
        tablet:w-full tablet:items-center tablet:px-[35px]
      "
      >
        {/* Subtitle */}
        <div className="flex gap-2 justify-center items-center mb-2">
          <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />
          <p
            className="text-[20px]
          laptop:[18px]
          "
          >
            Perfect oricând
          </p>
        </div>

        {/* Title */}
        <h2
          className="font-[600] text-[38px]
        laptop:text-[32px]
        tablet:text-center
        "
        >
          {blockData.title}
        </h2>

        {/* Paragraph */}
        <p
          className="text-[17px] my-6
        tablet:text-center"
        >
          {blockData.description}
        </p>

        {/* CTA Button */}
        <Link
          className="ctaBtn text-md font-[500] rounded-full  bg-brand_red text-white flex justify-center items-center
          hover:bg-transparent hover:text-brand_red transition-all border border-solid border-brand_red"
          href="#"
        >
          {blockData.buttonText}
        </Link>
      </div>

      {/* IMAGE COMPONENT */}
      <Image
        className="h-full w-[50%] object-cover
        tablet:w-full
        "
        src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${blockData.image.url}`}
        alt="img"
        width="400"
        height="400"
      />
    </section>
  )
}
