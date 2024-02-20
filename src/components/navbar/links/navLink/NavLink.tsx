'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  item: {
    path: string
    title: string
  }
}

const NavLink = ({ item }: Props) => {
  const pathName = usePathname()
  const active = pathName === item.path
  const styleActive = 'bg-white text-dark-blue'
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`w-24 p-3 rounded-3xl font-bold text-center ${active && styleActive}`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink
