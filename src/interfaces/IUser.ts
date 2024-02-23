export interface IUser {
  id?: number
  _id?: string
  name?: string
  username?: string
  email?: string
  address?: {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
    geo?: {
      lat?: string
      lng?: string
    }
  }
  provider?: string
  createdAt?: Date
  updatedAt?: Date
  image?: string
  isAdmin?: boolean
  password?: string
}
