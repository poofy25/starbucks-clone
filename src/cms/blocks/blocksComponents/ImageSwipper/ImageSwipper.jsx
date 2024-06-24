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
        <div className='bg-[#F4F3F3] overflow-hidden'>

            <section className='site-container aspect-[1.5/1] py-[32px] box-border   laptop:aspect-[2.8/1] desktop:py-[72px] '>
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={64}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    loop={true}
                    className='!overflow-visible'>

                        {/* SLIDES */}
                        {blockData.slides.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link href={slide.href} className='flex rounded-[20px] overflow-hidden relative'>
                                        <figure>
                                            <Image alt='image' src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${slide.image.url}`}  width='1000' height='500'/>
                                        </figure>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}

                        <ImageSwipperNavigation/>
                    </Swiper>
            </section>
        </div>

    )
}