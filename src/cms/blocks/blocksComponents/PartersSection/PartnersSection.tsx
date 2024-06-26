import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

// Block data is recived from Home server component that fetches the data

export default function PartnersSection({ blockData }: { blockData: any }) {
  return (
    <div
      className="flex w-full gap-[20px] items-stretch flex-row
      tablet:flex-col
      mobile:gap-[15px]
      "
    >
      {/* PARTNER BLOCKS */}
      {blockData.partners.map((partner: any, index: number) => {
        return (
          <div
            className="flex flex-1 flex-col rounded-[30px] overflow-hidden
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
            <div
              className="flex h-fit p-[30px] justify-start box-border items-center flex-col bg-white
            mobile:p-[20px]
            "
            >
              <div
                className="flex w-fit h-fit flex-col justify-between items-center
              gap-[25px]
              mobile:gap-[20px]
              "
              >
                <h3
                  className="font-[600] flex justify-center items-center gap-2 text-start flex-row text-[32px]
                   laptop:text-[28px]
                   mobile:text-[26px]
                "
                >
                  <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />

                  {partner.title}
                </h3>

                <p className="font-[400] text-center m-0">{partner.description}</p>

                {/* CTA Button */}
                <Link
                  className="ctaBtn text-sm font-[500] rounded-full bg-brand_red text-white flex justify-center items-center
                  hover:bg-transparent hover:text-brand_red transition-all border border-solid border-brand_red
                  "
                  href="#"
                  target="_blank"
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
