import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    /* The images should be in a div */
    <div className="flex gap-[100px] justify-between items-center h-full">
      <div className="flex-1 flex flex-col gap-[30px]">
        <h2 className="text-violet text-2xl">About agency</h2>
        <h1 className="text-light-pink text-5xl">
          We create digital items that are bigger, bolder, braver and better.
        </h1>
        <p className="text-white text-lg">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're world's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl">10 K+</h1>
            <p className="text-white text-lg">Year of experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-3xl">10 K+</h1>
            <p className="text-white text-lg">Year of experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-3xl">10 K+</h1>
            <p className="text-white text-lg">Year of experience</p>
          </div>
        </div>
      </div>
      {/*Parent element of an image must be relative, absolute , by default it choose absolute*/}
      <div className="relative flex-1 h-full">
        {/* Contain preserves the width */}
        <Image
          src={'/about.png'}
          alt=""
          className="w-full"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default About
