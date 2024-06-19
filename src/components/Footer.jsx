import Link from 'next/link'
import Image from 'next/image'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'

import PatternLineImg from '/public/imgs/pattern_line.jpg'
import InstagramSvg from '/public/svgs/instagram.svg'
import FacebookSvg from '/public/svgs/facebook.svg'
import EmailSvg from '/public/svgs/email.svg'

export default async function Footer() {

  const payload = await getPayloadHMR({config:configPromise})

  const data = await payload.findGlobal({
    slug:'footer'
  })
  
  return (

    <footer className="flex flex-col justify-center items-center w-full bg-black text-white box-border">
      <Image alt='pattern' src={PatternLineImg} width='1920' height='35'/>

      {/* LINKS / SECTIONS */}
      <div className="w-[1410px] flex gap-32 py-[72px] justify-start">

        <div className='flex flex-col gap-8 w-[164px]'>
          <Link href='/'><Image className='object-scale-down' src={data.image.url} width='130' height='100' alt='logo'/></Link>
          <p className='font-[500]'>{data.info}</p>
        </div>

        {/* Maping through sections */}
        {data.linksSections.map((section, index) => {

          return (
            <div className="flex flex-1 flex-col gap-4 text-[18px]" key={index}>
              <h3 className="text-[20px] font-[500] mb-1 text-brand_red">{section.title}</h3>

              {/* Mapping through section links */}
              {section.links.map((link, index) => {
                return (
                  <Link className="opacity-75 text-base hover:opacity-100" href={link.href} key={index}>{link.text}</Link>
                )
              })}
          
            </div>
          )
        })}

        {/* Contact section */}

        <div className="flex flex-1 flex-col gap-4 text-[18px]">
              <h3 className="text-[20px] font-[500] mb-1 text-brand_red">{data.contact.title}</h3>

              {/* Mapping through section links */}
              {data.contact.links.map((link, index) => {
                return (
                  <div className='flex flex-col gap-2' key={index}>
                    <p>{link.title}</p>
                    <Link className="opacity-75 text-base hover:opacity-100" href={link.href} key={index}>{link.text}</Link>
                  </div>
                )
              })}
          
        </div>

      </div>

      {/* COPYRIGHT SECTION */}
      <div className="flex justify-between items-center w-[1410px] py-4 mt-16 box-border">
        <p className="text-[16px] opacity-75">
          {data.bottomFooter.copyrightText}
        </p>
        <div className='flex gap-[30px]'>
          <Link href={data.bottomFooter.instagramHref}><Image src={InstagramSvg} alt='social' height='36' width='36'/></Link>
          <Link href={data.bottomFooter.facebookHref}><Image src={FacebookSvg} alt='social' height='36' width='36'/></Link>
          <Link href={data.bottomFooter.emailHref}><Image src={EmailSvg} alt='social' height='36' width='36'/></Link>
        </div>
      </div>
    </footer>
  )
}
