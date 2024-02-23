'use client'

import dynamic from 'next/dynamic'
import { useSession, signIn, signOut } from 'next-auth/react'

//Will throw error: text content did not match because will compare the DOM in the server and in the client.
// import HydrationTest from "@/components/hydrationTest/hydrationTest"

//Solution 1:
// With dynamic import, the component won't rendered on server and won't be compared with the client.
const HydrationTestNoSSR = dynamic(
  () => import('@/components/hydrationTest/hydrationTest'),
  { ssr: false }
)

type Props = {}

const Admin = (props: Props) => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>
      <h1>Admin</h1>
      {/* Will throw error text */}
      {/* <HydrationTest/> */}
      {/* No error with dynamic import */}
      <HydrationTestNoSSR />
      {session ? (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn('github')}>Sign in</button>
        </>
      )}
    </div>
  )
}

export default Admin
