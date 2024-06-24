'use client'

import Image from "next/image"
import { useSwiper } from "swiper/react"

import ArrowSvg from '/public/svgs/arrow.svg'


const ImageSwipperNavigation = () => {
    const swiper = useSwiper()

    return (
        <>
            <button className="w-[30px] translate-x-[-50%] aspect-square absolute top-[50%] z-10 translate-y-[-50%] flex items-center justify-center rounded-full bg-[#E1E1E1]
            desktop:w-[72px]" onClick={()=>{swiper.slidePrev()}}><Image className="w-[16px] h-[16px]" src={ArrowSvg} alt='nav' width='24' height='24'/></button>
            <button className="w-[30px] translate-x-[50%] aspect-square absolute top-[50%] z-10 translate-y-[-50%] right-0 flex items-center justify-center rounded-full bg-[#E1E1E1]
            desktop:w-[72px]" onClick={()=>{swiper.slideNext()}}><Image className="rotate-180 w-[16px] h-[16px]" src={ArrowSvg} alt='nav' width='24' height='24'/></button>
        </>
    )
}

export default ImageSwipperNavigation