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

    <footer className="flex flex-col justify-center items-center w-full bg-black text-white box-border font-switzer">
      {/* PATTERN IMAGE */}
      <Image alt='pattern' className='h-[35px] w-full object-cover' src={PatternLineImg} width='1920' height='35'/>
      <div className='site-container'>

      {/* LINKS / SECTIONS */}
      <div className="flex flex-wrap w-full  py-[48px] justify-start
       laptop:py-[72px] laptop:gap-32 laptop:flex-row 
      ">

        <div className='flex flex-col items-center gap-8 w-full mb-16 laptop:mb-0 laptop:items-start laptop:w-[164px]'>
          <Link href='/'><Image className='object-scale-down' src={data.image.url} width='130' height='100' alt='logo'/></Link>
          <p className='font-[500]'>{data.info}</p>
        </div>

        {/* Maping through sections */}
        {data.linksSections.map((section, index) => {

          return (
            <div className="flex flex-[0_0_50%] max-w-[50%] items-center flex-col gap-4 text-[18px] laptop:flex-1 laptop:items-start" key={index}>
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

        <div className="flex w-full flex-col gap-4 text-[18px] items-center mt-16 laptop:mt-0 laptop:flex-1 laptop:items-start">
              <h3 className="text-[20px] font-[500] mb-1 text-brand_red">{data.contact.title}</h3>

              {/* Mapping through section links */}
              {data.contact.links.map((link, index) => {
                return (
                  <div className='flex flex-col items-center gap-2 laptop:items-start' key={index}>
                    <p className='text-center laptop:text-start'>{link.title}</p>
                    <Link className="opacity-75 text-base hover:opacity-100" href={link.href} key={index}>{link.text}</Link>
                  </div>
                )
              })}
          
        </div>

      </div>

      {/* COPYRIGHT SECTION */}
      <div className="flex flex-col-reverse gap-4 justify-between items-center py-4 mt-4 box-border
       laptop:mt-0 laptop:py-[24px] laptop:flex-row laptop:gap-0 
      ">
        <p className="text-[16px] opacity-75">
          {data.bottomFooter.copyrightText}
        </p>
        <div className='flex gap-[30px]'>
          <Link href={data.bottomFooter.instagramHref}><Image src={InstagramSvg} alt='social' height='36' width='36'/></Link>
          <Link href={data.bottomFooter.facebookHref}><Image src={FacebookSvg} alt='social' height='36' width='36'/></Link>
          <Link href={data.bottomFooter.emailHref}><Image src={EmailSvg} alt='social' height='36' width='36'/></Link>
        </div>
      </div>
      </div>
    </footer>
  )
}
