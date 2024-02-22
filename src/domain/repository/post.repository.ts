import { Post } from '@/domain/schemas/post.schema'
import { IPost } from '@/interfaces/IPost'
import { dbAtlasConn } from '@/lib/dbConnection'

export const getPosts = async (): Promise<IPost[]> => {
  try {
    await dbAtlasConn()
    const posts = await Post.find().lean()
    return posts as IPost[]
  } catch (error) {
    console.log(error)
    throw new Error('Error getting posts')
  }
}

export const getPostById = async (postId: string): Promise<IPost> => {
  try {
    await dbAtlasConn()
    const post = await Post.findById(postId).lean()
    return post as IPost
  } catch (error) {
    console.log(error)
    throw new Error('Error getting posts')
  }
}
