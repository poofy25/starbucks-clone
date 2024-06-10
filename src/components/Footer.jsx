import Link from 'next/link'
import Image from 'next/image'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'

export default async function Footer() {

  const payload = await getPayloadHMR({config:configPromise})

  const data = await payload.findGlobal({
    slug:'footer'
  })
  
  return (

    <footer className="flex flex-col w-full mt-32 px-10 pt-8 text-black border-0 border-t border-solid border-black box-border">

      {/* LINKS / SECTIONS */}
      <div className="w-full flex gap-32 justify-start">

        <Link href='/'><Image src='https://www.svgrepo.com/show/508699/landscape-placeholder.svg' width='200' height='200' alt='logo'/></Link>

        {/* Maping through sections */}
        {data.linksSections.map((section, index) => {

          return (
            <div className="flex flex-col gap-4 text-[18px]" key={index}>
              <h3 className="text-[20px] font-bold mb-2">{section.title}</h3>

              {/* Mapping through section links */}
              {section.links.map((link, index) => {
                return (
                  <Link className="opacity-75 text-base hover:opacity-100" href={link.href} key={index}>{link.text}</Link>
                )
              })}
          
            </div>
          )
        })}
      </div>

      {/* COPYRIGHT */}
      <div className="py-4 mt-16 border-0 border-t border-solid border-[rgba(0,0,0,0.5)] box-border">
        <p className="text-[16px] opacity-75">
          © 2024 Mozza. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
