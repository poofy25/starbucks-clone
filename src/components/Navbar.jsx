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

  return (
    <nav className="flex text-black items-center w-full justify-between h-[100px] shadow-md px-10 box-border">
      
      <div className="flex flex-1 items-center gap-6 tracking-[1px] font-bold">
        {links.map((link, index) => {
          return (
            <Link className='text-[16px]' href={link.href} key={index}>{link.text}</Link>
          )
        })}
      </div>
      <Link href='/' className="w-[50px] h-[50px]">
        <Image src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${logo.url}`} alt='logo' width='50' height='50'/>
      </Link>
      <div className="flex gap-4 items-center justify-end flex-1">
        <Link
          className="px-6 py-2 flex items-center justify-center font-bold"
          href="/map"
        > 
          <Image src={LocationSvg} alt='location' width='32' height='32'/>
          GASESTE-NE
        </Link>
        <Link
          className="px-6 py-2 flex items-center justify-center font-bold text-black  border border-solid border-black"
          href="tel:+37360020035"
        >
          +373 600 200 35
        </Link>
      </div>
    </nav>
  )
}
