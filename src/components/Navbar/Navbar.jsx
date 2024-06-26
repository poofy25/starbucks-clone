import Link from 'next/link'
import Image from 'next/image'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'

import LocationSvg from '/public/svgs/location.svg'

import NavBarMenu from './NarbarMenu';

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
    <header className='w-full bg-black sticky top-0 z-20'>

        {/* PROMOTIONAL TEXT */}
        {promoText && 
            <div className='text-white w-full font-[500] bg-brand_red flex justify-center items-center text-[13px] py-1 px-[15px] text-center h-[35px]'>
              {promoText}
            </div>
        }

       <div className='site-container w-full'>
        <nav className="flex flex-col z-20 bg-black text-black items-center w-full justify-evenly h-[68px] sticky top-0 shadow-md py-[10px] box-border">

          



          <div className='flex justify-between w-full items-center h-full laptop:w-[70vw] laptop:min-w-[864px] desktop:w-[1410px]'>
            {/* Links */}
            <div className="flex-1 items-center text-white gap-6 font-bold hidden laptop:flex">
              {links.map((link, index) => {
                return (
                  <Link className='text-[14px] font-[500]' href={link.href} key={index}>{link.text}</Link>
                )
              })}
            </div>
            {/* Logo */}
            <Link href='/' className="w-fit h-fit flex justify-center items-center">
              <Image className='w-fit h-[27px]' src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${logo.url}`} alt='logo' width='160' height='32' priority />
            </Link>

            {/* Navbar menu and button */}
            {/* <NavBarMenu/> */}

            <div className="gap-[20px] items-center justify-end flex-1 text-white hidden laptop:flex">

              {/* Button 1 */}
              <Link
                className="flex gap-1 text-[14px] items-center justify-center font-medium"
                href={button1.href}
              > 
                <Image className='max-w-[20px]' src={LocationSvg} alt='location' width='32' height='32'/>
                {button1.text}
              </Link>

              {/* Buttton 2 */}
              <Link
                className="px-[25px] h-[40px] bg-brand_red flex items-center justify-center rounded-full font-medium text-[14px]  border border-solid border-brand_red
                hover:bg-transparent transition-all"
                href={button2.href}
              >
                {button2.text}
              </Link>
            </div>
          </div>
        </nav>
    </div>

    </header>

  )
}
