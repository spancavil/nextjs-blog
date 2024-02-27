'use client'
import NavLink from './navLink/NavLink'
import Button from './button/Button'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

type Props = {}

const Links = (props: Props) => {
  const session = useSession()
  const [open, setOpen] = useState(false)
  const isAdmin = true
  const links = [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
  ]
  if (session.status === "unauthenticated") {
    links.push(
      { title: 'Register', path: '/register' },
      { title: 'Login', path: '/login' }
    )
  }
  if (session.data?.user && isAdmin) {
    links.push({ title: 'Admin', path: '/admin' })
  }
  return (
    <div className="flex items-center gap-3 z-10">
      <div className="hidden md:flex">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session.status === 'authenticated' && <Button onClick={()=> signOut()} title="Logout" />}
      </div>
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex md:hidden"
      >
        <div className='min-h-[20px] min-w-[20px]'>
          <Image src={'/menu.png'} alt='burger' width={20} height={20}/>
        </div>
      </button>
      {open && (
        <div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-violet flex flex-col items-center justify-center gap-3 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session.status === 'authenticated' && <Button title="Logout" onClick={()=> signOut()}/>}
        </div>
      )}
    </div>
  )
}

export default Links
