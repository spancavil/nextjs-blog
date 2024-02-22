import Image from 'next/image'
import getRandomDate from '@/lib/randomDate'
import Link from 'next/link'
import { IPost } from '@/interfaces/IPost'
type Props = {
  post: IPost
}

const PostCard = ({post}: Props) => {
  const randomDate = getRandomDate(new Date(2023, 0, 1), new Date())
  const randomDateFormatted = `${randomDate.getFullYear()} - ${randomDate.getMonth()} - ${randomDate.getDate()}`
  return (
    <div className="h-[720px] w-[420px] bg-blue flex flex-col gap-3 p-3 rounded-xl">
      <div className="h-3/5 flex justify-center items-center">
        <div className="relative h-full w-10/12 rounded-md">
          <Image src={'/post-1.jpg'} alt="" fill className="object-cover rounded-md" />
        </div>
        <h2 className="rotate-90 w-2/12 text-nowrap text-center">{randomDateFormatted}</h2>
      </div>
      <div className="h-2/5 bg-dark-blue flex flex-col gap-2 justify-start items-start p-3">
        <h3 className='text-2xl text-white'>{post.title}</h3>
        <h4 className='text-md text-white'>{post.body}</h4>
        <Link className='text-md text-blue underline' href={`/blog/${post._id}`}>Read more...</Link>
      </div>
    </div>
  )
}

export default PostCard
