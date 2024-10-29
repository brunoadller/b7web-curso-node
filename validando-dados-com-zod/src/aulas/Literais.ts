import z from 'zod'

const pattern = z.object({
    //não só será uma strin, mas terá um valor literal associado do que se espera
    name: z.literal('bruno'),
    age: z.literal(90)
})

//Literals significa que posso esperar não só uma string ser enviada, mas sim
//um determinado valor

export  const result = pattern.parse({
    name: 'bruno',
    age:2
})