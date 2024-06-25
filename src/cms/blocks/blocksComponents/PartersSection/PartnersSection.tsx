import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

// Block data is recived from Home server component that fetches the data

export default function PartnersSection({ blockData }: { blockData: any }) {
  return (
    <div
      className="flex flex-col w-full gap-[30px] items-stretch
       laptop:flex-row
    "
    >
      {/* MAPPING THROUGH PARTNER BLOCKS */}
      {blockData.partners.map((partner: any, index: number) => {
        return (
          <div
            className="flex flex-1 flex-col  rounded-[30px] overflow-hidden
            "
            key={index}
          >
            {/* PARTNER IMAGE */}
            <div className="relative w-full aspect-[2/1] desktop:aspect-[uset]">
              <Image
                className="object-cover"
                alt="partner image"
                fill
                src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${partner.image.url}`}
              />
            </div>

            {/* INFO BOX */}
            <div className="flex h-fit p-[30px] justify-start box-border items-center flex-col bg-white">
              <div
                className="flex w-fit h-fit flex-col justify-between items-center
              gap-[25px]"
              >
                <h3
                  className="font-bold text-center text-[28px] flex flex-col justify-center items-center gap-2
                laptop:text-[28px] laptop:text-start laptop:flex-row desktop:text-[32px]
                "
                >
                  <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />

                  {partner.title}
                </h3>

                <p className="font-[400] text-center my-4 laptop:text-[16px] desktop:m-0 desktop:text-[18px]">
                  {partner.description}
                </p>

                {/* Button */}
                <Link
                  className="ctaBtn text-sm font-[500] rounded-full bg-brand_red text-white flex justify-center items-center
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
