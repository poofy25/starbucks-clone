'use client'

import { useState } from 'react'

export default function NavBarMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative h-full flex flex-col justify-center items-center lg:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          title="Menu Button"
          className="relative w-[30px] h-[22px] p-0 bg-transparent hover:bg-transparent"
        >
          <div className="w-full h-[3px] bg-white absolute top-0 left-0 bg-secondary rounded"></div>
          <div className="w-full h-[3px] bg-white translate-y-[-50%] absolute left-0 bg-secondary rounded"></div>
          <div className="w-full h-[3px] bg-white absolute bottom-0 left-0 bg-secondary rounded"></div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 bg-[rgba(0,0,0,0.5)] text-white w-[100vw] h-[100vh] transition-all
        ${isOpen ? 'right-0' : 'right-[-100%]'}
        `}
      >
        <div className="w-full h-full bg-black absolute top-0 right-0 p-[15px] box-border">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-[15px] left-[15px] w-[30px] h-[22px] p-0 bg-transparent hover:bg-transparent"
          >
            <div className="w-full h-[3px] bg-white absolute top-0 left-0 bg-secondary rounded rotate-45 translate-y-[10px]"></div>
            <div className="w-full h-[3px] bg-white absolute bottom-0 left-0 bg-secondary rounded -rotate-45 translate-y-[-9px] "></div>
          </button>
        </div>
      </div>
    </>
  )
}
