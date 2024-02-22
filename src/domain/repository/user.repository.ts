import { IUser } from '@/interfaces/IUser'
import { User } from '../schemas/user.schema'
import { dbAtlasConn } from '@/lib/dbConnection'

export const getUserById = async (userId: string): Promise<IUser> => {
  try {
    await dbAtlasConn()
    const user = await User.findById(userId).lean()
    return user as IUser
  } catch (error) {
    throw new Error('Error getting user by id')
  }
}

export const getUsers = async (): Promise<IUser[]> => {
  try {
    await dbAtlasConn()
    const users = await User.find().lean()
    return users as IUser[]
  } catch (error) {
    throw new Error('Error getting users')
  }
}
