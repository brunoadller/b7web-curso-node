import z from 'zod'

const pattern = z.object({
    name: z.string(),
    age: z.number().optional()
})

export const result = pattern.parse({
    name: "Bruno"
})