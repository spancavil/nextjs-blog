'use client'
import Input from '@/components/input/Input'
import { showToast } from '@/utils/showToast'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Toaster } from 'sonner'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    showToast({
      duration: 3000,
      message: 'Message sent!',
      position: 'bottom-right',
      type: 'success',
    })
    reset()
  })
  return (
    <div className="h-screen w-full flex justify-between items-center gap-10">
      <div className="hidden md:block relative flex-1 w-full h-full">
        <Image
          src={'/contact.png'}
          fill
          alt="contact-img"
          className="object-contain"
        />
      </div>
      <form className="relative flex-1 w-full" onSubmit={onSubmit}>
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Contact us</h1>
        <Input label="name" title="Name" key="name" register={register} />
        {errors['name'] && (
          <span className="text-red-500">{`${errors['name'].message}`}</span>
        )}
        <Input label="email" title="Email" key="email" register={register} />
        {errors['email'] && (
          <span className="text-red-500">{`${errors['email'].message}`}</span>
        )}
        <Input
          label="message"
          title="Message"
          key="message"
          register={register}
          textArea={true}
        />
        {errors['message'] && (
          <span className="text-red-500">{`${errors['message'].message}`}</span>
        )}
        <button className="w-full bg-blue text-white p-3 rounded-lg mt-6">
          Send
        </button>
        <Toaster />
      </form>
    </div>
  )
}

export default Contact
