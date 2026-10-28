import React from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {registerSchema} from './registerSchema'

const RegisterForm = () => {
    let {register, handleSubmit, formState:{errors, isSubmiting}} = useForm({resolver: zodResolver(registerSchema)})

    async function onSubmit(data){console.log(`Valid data : ${data}`)}

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
    className='bg-blue-200 h-screen p-2 flex flex-col justify-center items-center gap-2  [&_input]:mb-2 [&_input]:border
     [&_input]:border-gray-400 [&_input]:m-2 [&_input]:rounded-xl [&_button]:bg-gray-200 [&_button]:p-2 [&_p]:text-red-800'>
        <div>
            <label>Name</label>
            <input {...register("name")} />
            <p>{errors.name?.message}</p>
        </div>
        <div>
            <label>Email</label>
            <input type='email' {...register("email")} />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label>Password</label>
            <input type='password' {...register("password")} />
            <p>{errors.password?.message}</p>
        </div>
        <div>
            <label>Conform Password</label>
            <input type='password' {...register("conformPassword")} />
            <p>{errors.conformPassword?.message}</p>
        </div>

        <button type='submit' disabled={isSubmiting}>
            {isSubmiting ? "Submitting..." : "Register"}
        </button>
    </form>
  )
}

export default RegisterForm
