import z from 'zod'

//o enum é uma  lista de opções para escolher uma destas opções
const pattern = z.object({
  fuel: z.enum(['Gasoline', 'Etanol', 'Diesel'])
})

export const result = pattern.parse({
    fuel: 'Diesel'
})