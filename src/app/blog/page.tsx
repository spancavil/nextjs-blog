// 'use client'
//IMPORTANT: if we use a connection to database, we cannót use "use client" directive, because we make this connection from server.
import { IPost } from '@/interfaces/IPost'
import { showToast } from '@/utils/showToast'
import { Toaster } from 'sonner'
import dynamic from 'next/dynamic'
import { getPosts } from '@/domain/repository/post.repository'
import { getUsers } from '@/domain/repository/user.repository'
import { metadata } from '../layout'
import { Metadata } from 'next'
const PostCard = dynamic(() => import('@/components/postCard/PostCard'), {
  ssr: false,
})

//Fetch from API
/* const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts') //by default caches response
  if (!response.ok) throw new Error('Error getting posts')
  return await response.json()
} */

//Must be exported for it to work
export const generateMetadata = async (props: object): Promise<Metadata> => {
  
  return{
    title: "Blog section",
    description: "Blog section"
  }
}

const Blog = async () => {
  let posts: IPost[] = []
  try {
    posts = await getPosts()
  } catch (error: any) {
    console.log(error)
    showToast({ message: error.message, duration: 3000, type: 'error' })
  }
  return (
    <div className="relative flex flex-wrap gap-4 m-5">
      {posts.map((post) => {
        return <PostCard post={post} key={post._id} />
      })}
      <Toaster />
    </div>
  )
}

export default Blog
