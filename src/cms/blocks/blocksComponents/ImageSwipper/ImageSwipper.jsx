'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import Image from 'next/image'
import Link from 'next/link'

import testImg from '/public/testimg.jpg'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSwipper ({blockData}) {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        className='h-[calc(100vh-100px)] w-full'>
            {blockData.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Link href={slide.href} className='w-full h-full bg-blue-50 relative'>
                            <Image src={`${slide.image.url}`}  className='w-full h-full object-cover' width='500' height='500'/>
                        </Link>
                    </SwiperSlide>
                )
            })}
            
        </Swiper>
    )
}