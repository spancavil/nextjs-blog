import Link from 'next/link'
import Links from './links/Links'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="min-h-[100px] w-full flex items-center justify-between ">
      <div className="text-3xl font-bold">
        <Link href={'/'}>NextJS App With Next-auth</Link>
      </div>
      <Links />
    </div>
  )
}

export default NavBar
