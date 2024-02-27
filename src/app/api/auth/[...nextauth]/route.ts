import { IUser } from '@/interfaces/IUser'
import { dbAtlasConn } from '@/lib/dbConnection'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import bcrypt from 'bcrypt'
import { User } from '@/domain/schemas/user.schema'

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        usernameOrEmail: {
          label: 'usernameOrEmail',
          type: 'text',
          placeholder: 'username or email',
        },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req): Promise<any> {
        dbAtlasConn()
        const userFoundArray = await User.find({
          $or: [
            { email: credentials?.usernameOrEmail },
            { username: credentials?.usernameOrEmail },
          ],
        })
        if (!userFoundArray.length) return null
        const userFound = userFoundArray.pop()

        if (userFound?.password) {
          const matchPasswords = await bcrypt.compare(
            credentials?.password as string,
            userFound?.password
          )

          if (!matchPasswords) return null

          return {
            id: userFound._id,
            name: userFound.username,
            email: userFound.email,
            image: userFound.image,
            isAdmin: userFound.isAdmin
          }
        }
      },
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENTID ?? '',
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (account?.provider === 'github') {
        try {
          dbAtlasConn()
          const userFound = await User.findOne({ email: user.email }).lean()
          console.log(userFound)
          if (!userFound) {
            const newUser: IUser = {
              name: user.name as string,
              email: user.email as string,
              image: user.image as string,
              provider: account.provider,
              isAdmin: false,
            }
            await User.create(newUser)
          }
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    }
  },
  pages: {
    signIn: '/login',
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
