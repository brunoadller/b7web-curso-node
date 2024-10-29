import { url } from 'inspector'
import {z} from 'zod'

//estas são as transformations
const pattern = z.object({
    name: z.string().toUpperCase(),
    email: z.string().email().toLowerCase(),
    description: z.string().trim()
})

//validations
const pattern2 = z.object({
    name: z.string().email(),
    url: z.string().url(),
    emoji: z.string().emoji(),
    id: z.string().uuid(),
    imagem: z.string().startsWith('z_').endsWith(".jpg")
    //startsWidht começa com
    //endsWidth termina com
})
export const result = pattern2.parse({
    name: "Bruno",
    
})

