import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

// Block data is recived from Home server component that fetches the data

export default function PartnersSection({ blockData }: { blockData: any }) {
  return (
    <div
      className="flex flex-col w-full gap-[30px] items-stretch py-[32px]
    laptop:w-[864px] laptop:flex-row laptop:py-[72px] desktop:w-[1410px]
    "
    >
      {/* MAPPING THROUGH PARTNER BLOCKS */}
      {blockData.partners.map((partner: any, index: number) => {
        return (
          <div
            className="flex flex-1 flex-col  rounded-[30px] overflow-hidden
            laptop:aspect-[1.25/1] desktop:h-[566px] 
            "
            key={index}
          >
            {/* PARTNER IMAGE */}
            <div className="relative w-full aspect-[2/1]">
              <Image
                className="object-cover"
                alt="partner image"
                fill
                src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${partner.image.url}`}
              />
            </div>

            {/* INFO BOX */}
            <div className="flex h-fit p-8 justify-start box-border items-center flex-col bg-white laptop:h-[50%] laptop:p-4 desktop:pt-8">
              <div
                className="flex w-fit h-full flex-col justify-between items-center
              laptop:gap-4 laptop:items-start laptop:h-fit desktop:gap-8"
              >
                <h3
                  className="font-bold text-[20px] flex flex-col justify-center items-center gap-2
                laptop:text-[24px] laptop:flex-row desktop:text-[32px]
                "
                >
                  <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />

                  {partner.title}
                </h3>

                <p className="font-[400] text-center my-4 laptop:text-[16px] desktop:text-[18px]">
                  {partner.description}
                </p>

                {/* Button */}
                <Link
                  className="text-md font-[500] rounded-full px-6 py-4 w-fit bg-brand_red text-white flex justify-center items-center
                  hover:bg-transparent hover:text-brand_red transition-all border border-solid border-brand_red
                  "
                  href="#"
                >
                  {partner.buttonText}
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
