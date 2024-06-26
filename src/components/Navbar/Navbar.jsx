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

          



          <div className='flex justify-between w-full items-center h-full '>
            {/* Links */}
            <div className="flex-1 items-center text-white gap-6 font-bold flex">
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

            <div className="gap-[20px] items-center justify-end flex-1 text-white flex">

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
                hover:bg-transparent transition-all
                tablet:hidden
                "
                href={button2.href}
              >
                {button2.text}
              </Link>


              <Link
                className="hidden fixed bottom-[15px] right-[15px] bg-brand_red p-[15px] rounded-full
                tablet:flex
                "
                href={button2.href}
              >
                <svg className='w-[25px] h-[25px]' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282 282"><g clip-path="url(#telephone-call_74451 1__a)"><path d="m260.274 233.335-39.359-49.946c-5.515-6.983-15.642-8.18-22.605-2.673l-15.174 11.958c-7.007 5.508-36.986 8.668-67.398-29.893-30.397-38.564-20.79-66.63-13.822-72.136l15.171-11.964c6.985-5.495 8.188-15.619 2.688-22.609L80.405 6.133C74.897-.852 64.767-2.045 57.77 3.454c0 0-15.44 12.213-15.577 12.331-21.357 17.616-29.09 47.681-21.767 84.908 6.327 32.161 23.58 67.307 48.518 98.969 24.979 31.649 55.121 56.621 84.931 70.276 34.908 16.031 66.299 15.327 88.441-1.942.031-.031.074-.062.104-.088l15.174-11.958c7.008-5.509 8.194-15.627 2.68-22.615Z" fill="#fff"/></g><defs><clipPath id="telephone-call_74451 1__a"><path fill="#fff" d="M0 0h281.475v281.475H0z"/></clipPath></defs></svg>
              </Link>
            </div>
          </div>
        </nav>
    </div>

    </header>

  )
}
