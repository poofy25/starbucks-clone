import Image from 'next/image'
import Link from 'next/link'

import MiniLogoSvg from '/public/svgs/miniLogo.svg'

// Block data is recived from Home server component that fetches the data

export default function PartnersSection({ blockData }: { blockData: any }) {
  return (
    <div className="flex gap-[30px] items-stretch w-[1410px] py-[72px]">
      {blockData.partners.map((partner: any, index: number) => {
        return (
          <div
            className="flex flex-1 flex-col h-[566px] rounded-[30px] overflow-hidden"
            key={index}
          >
            <div className="relative w-full h-[50%]">
              <Image
                alt="partner image"
                fill
                src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${partner.image.url}`}
              />
            </div>
            <div className="flex flex-1 justify-start pt-8 box-border items-center flex-col bg-white ">
              <div className="flex gap-8 w-fit h-fit flex-col">
                <h3 className="text-[32px] font-bold flex justify-center items-center gap-2">
                  <Image src={MiniLogoSvg} width="20" height="32" alt="logo" />

                  {partner.title}
                </h3>
                <p className="text-[18px] font-[400]">{partner.description}</p>
                <Link
                  className="text-md font-[500] border border-solid rounded-full px-6 py-4 w-fit bg-brand_red text-white flex justify-center items-center"
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
