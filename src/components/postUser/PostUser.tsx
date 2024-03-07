import Image from 'next/image'
import getRandomDate from '@/lib/randomDate'
import { IUser } from '@/interfaces/IUser'
import { getUserById } from '@/domain/repository/user.repository'

type Props = {
  userId: string
}

/* const fetchUserData = async (userId: number): Promise<IUser> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'}
  ) //by default caches response
  if (!response.ok) throw new Error('Error getting posts')
  return await response.json()
} */

const PostUser = async ({ userId }: Props) => {
  const user = await getUserById(userId)
  const randomDate = getRandomDate(new Date(2023, 0, 1), new Date())
  const randomDateFormatted = `${randomDate.getFullYear()} - ${randomDate.getMonth()} - ${randomDate.getDate()}`

  return (
    <div className="h-[80px] flex justify-start items-center gap-4">
      <div className="relative h-full w-20 rounded-full overflow-hidden">
        <Image
          src={'/post-1.jpg'}
          alt="user-image"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold md:text-2xl md:font-bold text-white">
          Author
        </h4>
        <h4 className="text-md md:text-xl text-white">{user && user.username}</h4>
      </div>
      <div>
        <h4 className="text-lg font-bold md:text-2xl text-white md:font-bold">
          Published
        </h4>
        <h4 className="text-md md:text-xl text-white">{randomDateFormatted}</h4>
      </div>
    </div>
  )
}

export default PostUser
