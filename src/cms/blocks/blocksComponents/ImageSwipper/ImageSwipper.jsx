'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ImageSwipperNavigation from './ImageSwipperNavigation'

import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Block data is recived from Home server component that fetches the data
export default function ImageSwipper ({blockData}) {
    return (
        <section className='aspect-[1.5/1] w-full bg-[#D9D9D9] py-[32px] box-border laptop:aspect-[2.8/1]'>
            <Swiper
            modules={[Navigation]}
            spaceBetween={64}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            className='h-full w-full relative'>

                {/* SLIDES */}
                {blockData.slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link href={slide.href} className='flex w-full h-full rounded-[20px] overflow-hidden bg-blue-50 relative'>
                                <Image alt='image' src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${slide.image.url}`} className='w-full h-full object-fill' fill/>

                            </Link>
                        </SwiperSlide>
                    )
                })}

                <ImageSwipperNavigation/>
            </Swiper>
        </section>
    )
}