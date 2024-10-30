import z from 'zod'


const pattern = z.object({
    name: z.string(),
    email: z.string().email(),
    //assume um valor padrão quando não é enviado algum
    //pode ser feito com uma função
    age: z.number().default(() => Math.floor(Math.random() * 18))
})

export const result = pattern.parse({
    name: 'burno',
    email: 'adller@gmail.com'
})