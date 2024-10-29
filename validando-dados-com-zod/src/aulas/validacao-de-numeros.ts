import z from 'zod'

//greater than - gt
//lower than - lt
//Greater than or egual - gte
//lower than or equal - lte

const pattern = z.object({
    age: z.number().multipleOf(5)
})

export const result = pattern.parse({
    age:12
})