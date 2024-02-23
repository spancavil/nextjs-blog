'use client'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useRouter } from 'next/navigation'
import { showToast } from '@/utils/showToast'
import { Toaster } from 'sonner'
import Input from '@/components/input/Input'

const RegisterPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    if (data['confirmPassword'] !== data['password']) 
    delete data['confirmPassword']
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJSON = await res.json()
    if (res.ok) {
      showToast({
        duration: 2000,
        message: 'Register successful',
        position: 'bottom-right',
        type: 'success',
        onAutoClose: onAutoCloseSuccessToast,
      })
    } else {
      showToast({
        duration: 4000,
        message: resJSON.message,
        position: 'bottom-right',
        type: 'error',
      })
    }
  })

  const onAutoCloseSuccessToast = () => {
    router.push('/login')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-full">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        <Input
          label="name"
          title="Name"
          key="name"
          register={register}
        />
        {errors['name'] && (
          <span className="text-red-500 text-sm">
            {`${errors['name'].message}`}
          </span>
        )}
        <Input
          label="username"
          title="Username (optional)"
          key="username"
          register={register}
        />
        {errors['username'] && (
          <span className="text-red-500 text-sm">
            {`${errors['username'].message}`}
          </span>
        )}
        <Input label="email" title="Email" key="email" register={register} />
        {errors['email'] && (
          <span className="text-red-500 text-sm">{`${errors['email'].message}`}</span>
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
        <Input
          label="confirmPassword"
          title="Confirm password"
          key="confirmPassword"
          register={register}
          type="password"
        />
        {errors['confirmPassword'] && (
          <span className="text-red-500 text-sm">
            {`${errors['confirmPassword'].message}`}
          </span>
        )}
        <button className="w-full bg-blue text-white p-3 rounded-lg mt-6">
          Sign up
        </button>
      </form>
      <Toaster />
    </div>
  )
}

export default RegisterPage
