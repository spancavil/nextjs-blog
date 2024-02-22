import mongoose, { model } from 'mongoose'
import { IUser } from '@/interfaces/IUser'

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    address: {
      type: {
        city: String,
        street: String,
        suite: String,
        zipcode: String,
        geo: {
          lat: String,
          lng: String,
        },
      },
      required: false,
      default: null,
    },
    image: {
        type: String,
        required: false
    }
  },
  { timestamps: true, versionKey: false }
)

//Check this to not overwrite existing model
export const User = mongoose.models.User || model<IUser>('User', userSchema)
