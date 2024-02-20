"use client"
import { Post } from '@/interfaces/Post'
import { showToast } from '@/utils/showToast'
import { Toaster } from 'sonner'
import dynamic from 'next/dynamic'
const PostCard = dynamic(()=> import('@/components/postCard/PostCard'), {ssr: false})

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts') //by default caches response
  if (!response.ok) throw new Error('Error getting posts')
  return await response.json()
}

const Blog = async () => {
  let posts: Post[] = []
  try {
    posts = await fetchPosts()
  } catch (error: any) {    
    showToast({ message: error.message, duration: 3000, type: 'error' })
  }
  return (
    <div className="relative flex flex-wrap gap-4 m-5">
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />
      })}
      <Toaster/>
    </div>
  )
}

export default Blog
