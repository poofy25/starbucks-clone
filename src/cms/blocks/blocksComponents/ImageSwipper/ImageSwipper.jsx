'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Block data is recived from Home server component that fetches the data
export default function ImageSwipper ({blockData}) {
    return (
        <section className='h-[calc(100vh-118px)] w-full bg-[#E1E1E1] py-[72px] box-border'>
        <Swiper
        modules={[Navigation]}
        spaceBetween={64}
        slidesPerView={'auto'}
        navigation={true}
        centeredSlides={true}
        loop={true}
        className='h-full w-full'>
            {blockData.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Link href={slide.href} className='flex w-[1410px] h-full rounded-[20px] overflow-hidden bg-blue-50 relative'>
                            <Image alt='image' src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${slide.image.url}`} className='w-full h-full' fill/>
                        </Link>
                    </SwiperSlide>
                )
            })}
            
        </Swiper>
        </section>
    )
}