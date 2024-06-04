import Link from 'next/link'
import Image from 'next/image'

import testImg from '/public/gradient.webp'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-32 px-10 pt-8 text-black border-0 border-t border-solid border-black box-border">
      <Image src={testImg} alt="testimg" width="100" height="100" />
      <div className="w-full flex gap-32 justify-start">
        <div className="flex flex-col gap-4 text-[18px]">
          <h3 className="text-[22px] mb-2">About us</h3>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-[18px]">
          <h3 className="text-[22px] mb-2">Careers</h3>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-[18px]">
          <h3 className="text-[22px] mb-2">Social Impact</h3>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-[18px]">
          <h3 className="text-[22px] mb-2">For Business Partners</h3>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-[18px]">
          <h3 className="text-[22px] mb-2">Order and Pick Up</h3>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
          <Link className="opacity-75 hover:opacity-100" href="#">
            Our Company
          </Link>
        </div>
      </div>
      <div className="py-4 mt-16 border-0 border-t border-solid border-[rgba(0,0,0,0.5)] box-border">
        <p className="text-[16px] opacity-75">
          © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
