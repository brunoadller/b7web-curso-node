import z from 'zod'


const pattern = z.object({
    name: z.string(),
   age: z.number(),
   magica: z.array(z.string()),
   magics: z.string().array()// mesma coisa que dizer string[] no typescript
})
export const result = pattern.parse({
    name: 'burno',
    age: 90,
    magica: ['vento', 10],
    magics: ['flexa', 'fogo']
})