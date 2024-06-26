import Link from 'next/link'
import Image from 'next/image'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from '@payload-config'

import PatternLineImg from '/public/imgs/pattern_line.jpg'

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

        {/* SECTIONS */}
        <div className="flex flex-wrap w-full justify-start
        py-[70px] gap-[30px] flex-row 
        ">

          {/* LOGO */}
          <div className='flex flex-1 flex-col gap-8 w-full mb-0 items-start '>
            <Link href='/'><Image className='object-scale-down h-[75px] w-auto' src={data.image.url} width='130' height='100' alt='logo'/></Link>
            <p className='font-[400]'>{data.info}</p>
          </div>

          {/* Maping through sections */}
          {data.linksSections.map((section, index) => {

            return (
              <div className="flex flex-col gap-[10px] text-[18px] flex-1 items-start" key={index}>
                <h3 className="text-[20px] font-[500] text-brand_red">{section.title}</h3>

                {/* LINKS */}
                {section.links.map((link, index) => {
                  return (
                    <Link className="opacity-50 text-base hover:opacity-100" href={link.href} key={index}>{link.text}</Link>
                  )
                })}
            
              </div>
            )
          })}

          {/* Contact section */}

          <div className="flex w-full flex-col gap-[10px] text-[18px] mt-0 flex-1 items-start">
                <h3 className="text-[20px] font-[500] text-brand_red">{data.contact.title}</h3>

                {/* LINKS */}
                {data.contact.links.map((link, index) => {
                  return (
                    <div className='flex flex-col gap-2 items-start' key={index}>
                      <p className=' text-[16px] text-start'>{link.title}</p>
                      <Link className="opacity-50 text-base hover:opacity-100" href={link.href} key={index}>{link.text}</Link>
                    </div>
                  )
                })}
            
          </div>

        </div>
      </div>

        {/* COPYRIGHT SECTION */}
        <div className='w-full border-0 border-t border-solid border-white border-opacity-20'>

          <div className='site-container'>
            <div className="flex justify-between items-center box-border
            mt-0 py-[15px] flex-row gap-0   
            ">
              <p className="text-[14px] opacity-50">
                {data.bottomFooter.copyrightText}
              </p>
              <div className='flex gap-[30px]'>
                <Link className='p-2 border border-solid border-white rounded-full opacity-50' href={data.bottomFooter.instagramHref}>
                <svg className='w-[15px] h-[15px]' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170"><path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0Zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752h.001Z" fill="#fff"/><path d="M84.53 40.97c-24.02 0-43.562 19.542-43.562 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563Zm0 72.123c-15.748 0-28.562-12.812-28.562-28.561 0-15.75 12.813-28.563 28.563-28.563 15.75 0 28.563 12.813 28.563 28.563 0 15.749-12.814 28.561-28.563 28.561Zm45.391-84.842c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 0 0-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22Z" fill="#fff"/></svg>

                </Link>
                <Link className='p-2 border border-solid border-white rounded-full opacity-50' href={data.bottomFooter.facebookHref}>
                <svg className='w-[15px] h-[15px]'  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 156"><path d="M52.584 155.139V84.378h23.742l3.562-27.585H52.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C78.325.752 69.661 0 59.577 0 38.52 0 24.104 12.853 24.104 36.452v20.341H.29v27.585h23.814v70.761h28.48Z" fill="#ffffff"/></svg>
                </Link>
                <Link className='p-2 border border-solid border-white rounded-full opacity-50' href={data.bottomFooter.tiktokHref}>
                  <svg className='w-[15px] h-[15px]' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 96"><path d="M67.66 18.573C63.442 13.669 61.232 7.332 61.407.88L45.643.5v67.466c-4.244 18.913-31.616 13.978-28.876-5.265 1.529-8.79 10.972-14.198 19.365-11.141V35.476C17.861 32.295.546 46.837.728 65.364c1.597 40.179 59.226 40.185 60.825 0-.403-1.438-.178-28.214-.235-30.472a42.634 42.634 0 0 0 23.954 6.405V24.685c-7.808 0-13.767-2.076-17.612-6.112Z" fill="#fff"/></svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
       
    </footer>
  )
}
