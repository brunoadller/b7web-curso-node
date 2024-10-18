import { z } from "zod"


//validando se uma variável tiver determinado tipo de valor

//dizendo que o padrão é uma string
//const schema = z.string().min(2) // dizendo que tem pelo menos 2 caracteres
const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
})
let data = {
    name: 'Bruno',
    email: 'addler676@gmail.com',
    age: 90

}