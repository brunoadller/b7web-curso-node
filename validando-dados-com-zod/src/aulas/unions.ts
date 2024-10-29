import z from 'zod'


const pattern = z.object({
    //posso fazer assim age: z.union([z.string(), z.number()])
    age: z.string().or(z.number())
})

export const result = pattern.parse({
    age: '69'
})
console.log(result)