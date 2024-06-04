import Link from 'next/link'
import Image from 'next/image'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'


export default async function Navbar() {

  const payload = await getPayloadHMR({config:configPromise})

  const data = await payload.findGlobal({
    slug:'navigation'
  })
  
  const logo = data.logo
  const links = data.links

  return (
    <nav className="flex text-black mb-12 items-center w-full justify-between h-[100px] shadow-md px-10 box-border">
      <div className="w-[50px] h-[50px]">
        <Image src={`${process.env.WEBSITE_URL}${logo.url}`} alt='logo' width='50' height='50'/>
      </div>
      <div className="flex items-center gap-6 tracking-[1px] font-bold ml-12 mr-auto">
        {links.map((link, index) => {
          return (
            <Link className='text-[16px]' href={link.href} key={index}>{link.text}</Link>
          )
        })}
      </div>
      <div className="flex gap-4 items-center">
        <Link
          className="px-6 py-2 flex items-center justify-center font-bold rounded-full border border-solid border-black"
          href="#"
        >
          Sign in
        </Link>
        <Link
          className="px-6 py-2 flex items-center justify-center font-bold text-white bg-black rounded-full border border-solid border-black"
          href="#"
        >
          Join now
        </Link>
      </div>
    </nav>
  )
}
