import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
type InputProps = {
  label: string
  title: string
  register: UseFormRegister<FieldValues>
  type?: React.HTMLInputTypeAttribute
  textArea?: boolean
}
const Input = ({
  label,
  title,
  register,
  type,
  textArea = false,
}: InputProps) => {
  return (
    <>
      <label htmlFor={label} className="text-violet mb-2 block text-sm">
        {title}
      </label>
      {textArea ? (
        <textarea
          rows={5}
          className="p-3 rounded block mb-2 bg-violet text-white w-full hover:border-0"
          {...register(label, {
            required: {
              value: true,
              message: `${label} is required`,
            },
          })}
        />
      ) : (
        <input
          className="p-3 rounded block mb-2 bg-violet text-white w-full"
          type={type || 'text'}
          {...register(label, {
            required: {
              value: true,
              message: `${label} is required`,
            },
          })}
        />
      )}
    </>
  )
}

export default Input
