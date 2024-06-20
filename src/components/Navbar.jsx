import Link from 'next/link'
import Image from 'next/image'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'

import LocationSvg from '/public/svgs/location.svg'

export default async function Navbar() {

  const payload = await getPayloadHMR({config:configPromise})

  const data = await payload.findGlobal({
    slug:'navigation'
  })
  
  const logo = data.logo
  const links = data.links
  const promoText = data.promoText
  const button1 = data.button1
  const button2 = data.button2

  return (
    <nav className="flex flex-col bg-black text-black items-center w-full justify-evenly h-[118px] shadow-md px-10 box-border">

      {promoText && 
      <div className='text-white w-full bg-brand_red flex justify-center items-center text-sm px-2 text-center h-[40px] rounded-[10px]'>
        {promoText}
      </div>
      }



      <div className='flex justify-between items-center h-[48px] laptop:w-[70vw] laptop:min-w-[864px] desktop:w-[1410px]'>
        {/* Link */}
        <div className="flex-1 items-center text-white gap-6 font-bold hidden laptop:flex">
          {links.map((link, index) => {
            return (
              <Link className='text-[16px] font-[500]' href={link.href} key={index}>{link.text}</Link>
            )
          })}
        </div>
        {/* Logo */}
        <Link href='/' className="w-fit h-fit flex justify-center items-center">
          <Image className='w-fit h-[32px]' src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${logo.url}`} alt='logo' width='160' height='32'/>
        </Link>
        <div className="flex gap-8 items-center justify-end flex-1 text-white hidden laptop:flex">
          {/* Button 1 */}
          <Link
            className="flex gap-1 items-center justify-center font-medium"
            href={button1.href}
          > 
            <Image src={LocationSvg} alt='location' width='32' height='32'/>
            {button1.text}
          </Link>
          {/* Buttton 2 */}
          <Link
            className="px-6 py-3 bg-brand_red flex items-center justify-center rounded-full font-medium text-sm  border border-solid border-brand_red
            hover:bg-transparent transition-all
            "
            href={button2.href}
          >
            {button2.text}
          </Link>
        </div>
      </div>
    </nav>
  )
}
