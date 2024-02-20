'use client'
import NavLink from './navLink/NavLink'
import Button from './button/Button'
import { useState } from 'react'

type Props = {}

const Links = (props: Props) => {
  const [open, setOpen] = useState(false)
  const session = true
  const isAdmin = true
  const links = [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
  ]
  if (!session) {
    links.push(
      { title: 'Register', path: '/register' },
      { title: 'Login', path: '/login' }
    )
  }
  if (session && isAdmin) {
    links.push({ title: 'Admin', path: '/admin' })
  }
  return (
    <div className="flex items-center gap-3 z-10">
      <div className="hidden md:flex">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session && <Button title="Logout" />}
      </div>
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex md:hidden"
      >
        Menu
      </button>
      {open && (
        <div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-violet flex flex-col items-center justify-center gap-3 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session && <Button title="Logout" />}
        </div>
      )}
    </div>
  )
}

export default Links
