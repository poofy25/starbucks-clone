import Image from 'next/image'
import Link from 'next/link'

export default function SplitSection({ blockData }: { blockData: any }) {
  return (
    <div
      style={{ backgroundColor: blockData.backgroundColor }}
      className={` h-fit flex justify-center items-center ${
        blockData.invertPosition ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <Image
        className="h-full w-[50%] object-cover"
        src={blockData.image.url}
        alt="img"
        width="400"
        height="400"
      />
      <div
        style={{ color: blockData.textColor }}
        className="w-[50%] flex flex-col justify-center items-center gap-5 p-16 box-border"
      >
        <h2 className="text-3xl font-bold">{blockData.title}</h2>
        <p className="text-center text-2xl">{blockData.description}</p>
        <Link
          style={{
            borderColor: blockData.textColor,
            // backgroundColor: blockData.buttonFill ? blockData.textColor : '',
          }}
          className="text-xl font-bold border border-solid rounded-full px-4 py-2 flex justify-center items-center"
          href="#"
        >
          {blockData.buttonText}
        </Link>
      </div>
    </div>
  )
}
