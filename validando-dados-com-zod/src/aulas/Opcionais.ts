import z from 'zod'

const pattern = z.object({
    name: z.string()
})

export const result = pattern.parse({

})