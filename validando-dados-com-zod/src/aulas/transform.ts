import z from 'zod'

const pattern = z.object({
    name: z.string().transform(val => val.length),
    email: z.string().email().transform((val) => val.split("@")[1])
})

export const result = pattern.parse({
    name: "bruno",
    email: 'bruno@gmail.com'
})