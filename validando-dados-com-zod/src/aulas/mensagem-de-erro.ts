import z from 'zod'


const pattern = z.object({
    age: z.number({
        required_error: "Idade é obrigatória",
        invalid_type_error: 'Idade precisa ser um número'
    }).gte(18, 'Precisa ser maior de idade')
})

export const result = pattern.parse({
    age: 15
})