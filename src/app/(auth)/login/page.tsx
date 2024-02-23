'use client'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useRouter } from 'next/navigation'
import { showToast } from '@/utils/showToast'
import { Toaster } from 'sonner'
import Input from '@/components/input/Input'

type Props = {}

const Login = (props: Props) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      usernameOrEmail: data.usernameOrEmail,
      password: data.password,
      redirect: false,
    })

    if (res?.ok) {
      router.push('/')
    } else {
      showToast({
        duration: 3000,
        message: "Wrong password or username/email don't exist",
        position: 'bottom-right',
        type: 'error',
      })
    }
  })
  return (
    <>
      <div className="h-screen flex justify-center items-center gap-11">
        <form onSubmit={onSubmit} className="w-full">
          <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>
          <Input
            label="usernameOrEmail"
            title="Email or username"
            key="usernameOrEmail"
            register={register}
          />
          {errors['usernameOrEmail'] && (
            <span className="text-red-500 text-sm">
              {`${errors['usernameOrEmail'].message}`}
            </span>
          )}
          <Input
            label="password"
            title="Password"
            key="password"
            register={register}
            type="password"
          />
          {errors['password'] && (
            <span className="text-red-500 text-sm">
              {`${errors['password'].message}`}
            </span>
          )}
          <button className="w-full bg-blue text-white p-3 rounded-lg mt-6">
            Login
          </button>
        </form>
        <h1 className="text-slate-200 font-bold text-xl mb-4">Or</h1>
        <button
          className="w-full bg-slate-700 text-white p-3 rounded-lg mt-6 border-teal-400"
          onClick={() => signIn('github')}
        >
          Sign in on Github
        </button>
      </div>
      <Toaster />
    </>
  )
}

export default Login
