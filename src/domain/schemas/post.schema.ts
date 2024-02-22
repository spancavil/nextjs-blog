import mongoose, { Types, model } from 'mongoose'
import { IPost } from '@/interfaces/IPost'

const postSchema = new mongoose.Schema<IPost>(
  {
    body: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true
    },
  },
  { timestamps: true, versionKey: false }
)
//Check this to not overwrite existing model
export const Post = mongoose.models.Post || model<IPost>('Post', postSchema)
