import {z} from 'zod'

export let registerSchema = z
    .object({
        name : z.string().min(2,"Name should have 2 chars"),
        email: z.string().email("Enter a valid email"),
        password: z.string().min(4,"Password should have atleast 4 chars"),
        conformPassword : z.string()
    })
    .refine((data)=> data.password === data.conformPassword,{
        message:"password does not match",
        path: ["conformPassword"]
    })