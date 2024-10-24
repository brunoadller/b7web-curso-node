import {z} from 'zod'


const pattern = z.object({
    name: z.string(),
    age: z.number(),
    active: z.boolean(),
    birthDate: z.date(),

})


export const result = pattern.parse("burno")



