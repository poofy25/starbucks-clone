'use client'

import Image from "next/image"
import { useSwiper } from "swiper/react"

import ArrowSvg from '/public/svgs/arrow.svg'


const ImageSwipperNavigation = () => {
    const swiper = useSwiper()

    return (
        // <div className="z-10 flex w-full justify-between absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] desktop:w-[1410px]">
        <>
            <button className="w-[64px] aspect-square absolute top-[50%] z-10 translate-y-[-50%] desktop:w-[72px]  desktop:translate-x-[-100px] flex items-center justify-center rounded-full bg-[#E1E1E1]" onClick={()=>{swiper.slidePrev()}}><Image src={ArrowSvg} alt='nav' width='24' height='24'/></button>
            <button className="w-[64px] aspect-square absolute top-[50%] z-10 translate-y-[-50%] right-0 desktop:translate-x-[100px] flex items-center justify-center rounded-full bg-[#E1E1E1]" onClick={()=>{swiper.slideNext()}}><Image className="rotate-180" src={ArrowSvg} alt='nav' width='24' height='24'/></button>
        </>
        // </div>
    )
}

export default ImageSwipperNavigation