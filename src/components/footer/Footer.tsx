import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex justify-between items-center text-[gray] w-full min-h-[100px]">
      <div className="font-bold relative h-16 w-16">
        <Image
          fill
          className="object-contain"
          src={'/keepitsimple.png'}
          alt="keepitsimple"
        />
      </div>
      <div className="text-lg">
        <a
          target="_blank"
          href="https://github.com/spancavil"
          rel="noopener noreferrer"
        >
          @spancavil
        </a>
      </div>
    </div>
  )
}

export default Footer
