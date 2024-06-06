
import Image from 'next/image'
import Link from 'next/link'

// Block data is recived from Home server component that fetches the data

export default function PartnersSection ({blockData}) {
    return (
        <div className='flex gap-16 items-stretch w-full px-8'>
            {blockData.partners.map((partner, index) => {
                return (
                    <div className='flex flex-1 flex-col' key={index}>
                        <div className='relative w-full aspect-[10/5]'>
                            <Image fill src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${partner.image.url}`} />
                        </div>
                        <div className='flex flex-col gap-4 p-4 shadow-2xl'>
                        <h3 className='text-3xl'>{partner.title}</h3>
                        <p className='opacity-75'>{partner.description}</p>
                        <Link
                        className='w-fit font-bold text-red-500 mt-4 border border-solid border-red-500 rounded-full px-8 py-2'
                        href={partner.href}>{partner.buttonText}</Link>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}