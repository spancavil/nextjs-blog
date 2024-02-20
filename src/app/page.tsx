import Image from "next/image"

const HomePage = () => {
  return (
    <div className="relative flex gap-[100px] h-full py-4">
      <div className="flex flex-1 flex-col gap-[50px] justify-center">
        <h1 className="text-6xl ">Creative Thoughts Agency</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quod id tempora fuga, rem non illo voluptates, harum doloremque excepturi quia. Eligendi facere architecto fugiat quidem facilis exercitationem illo sit.</p>
        <div className="flex gap-3 justify-start items-center">
          <button className="p-3 rounded-lg bg-violet text-white">
            Learn more
          </button>
          <button className="p-3 rounded-lg bg-blue text-white">
            Contact
          </button>
        </div>
        <div className="w-[500px] h-[50px] relative grayscale">
          <Image src={'/brands.png'} alt="" fill className=""/>
        </div>
      </div>
      <div className="relative flex-1">
        <Image src={'/hero.gif'} alt="" fill className="object-cover"/>
      </div>
    </div>
  )
}

export default HomePage