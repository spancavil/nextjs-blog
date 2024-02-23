import Image from 'next/image'
import { IPost } from '@/interfaces/IPost'
import dynamic from 'next/dynamic'
import { getPostById } from '@/domain/repository/post.repository'
import { Metadata } from 'next'
const PostUser = dynamic(() => import('@/components/postUser/PostUser'), {
  ssr: false,
})

type Props = {
  params: { slug: string }
  searchParams?: Object
}

//Must be exported for it to work
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug: id } = params
  //Don't worry Next won't fetch twice if is the same request
  const postDetail = await getPostById(id)
  return {
    title: `Blog with id: ${postDetail._id}`,
    description: `Fabulous description: ${postDetail.body}`,
  }
}

/* const fetchPostById = async (postId: string): Promise<IPost> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ) //by default caches response
  if (!response.ok) throw new Error('Error getting posts')
  return await response.json()
} */

const BlogById = async ({ params }: Props) => {
  const { slug: id } = params
  const postDetail = await getPostById(id)

  return (
    <div className="flex flex-col lg:flex-row gap-[50px] h-full w-full justify-start items-start">
      <div className="h-[300px] relative w-full lg:w-1/3 lg:h-full">
        <Image
          src={'/post-1.jpg'}
          alt=""
          fill
          className="object-cover lg:object-contain lg:object-top"
        />
      </div>
      <div className="lg:h-full lg:w-2/3 bg-violet flex flex-col justify-start items-start p-6 gap-4">
        <h1 className="text-2xl font-bold md:text-5xl text-white">
          {postDetail.title}
        </h1>
        {/* Suspense is what render when loading. It can be a skeleton too */}
        <PostUser userId={postDetail.userId as string} />
        <h3 className="text-sm text-white pt-5">{postDetail.body}</h3>
      </div>
    </div>
  )
}

export default BlogById
