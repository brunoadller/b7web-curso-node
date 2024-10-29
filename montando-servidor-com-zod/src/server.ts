import express from 'express'
import z from 'zod'
import { postSchema } from './schemas/PostSchema'

const server = express()



server.use(express.json())
server.use(express.urlencoded({extended: true}))


server.get('/ping', (req, res) => {
    res.json({pong: true})
})
server.get('/posts', async (req, res) => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = request.json()
    const result = postSchema.safeParse(data)
   
    if(!result.success){
        return res.status(500).json({error: "Ocorreu erro interno"})
    }
    let totalPosts = result.data.length
    res.json({total: totalPosts})
})
server.post('/user', (req, res) => {

    const userSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        age: z.number().min(18).max(120)
    })
    const result = userSchema.safeParse(req.body)
    if(!result.success){
        result.error
        return res.json({error: "Dados inválidos"})
    }
    const {name, email, age} = result.data
    //preocesso
    console.log("Processamento...")
    console.log(name, email, age)
    res.status(201).json({result: 'Tudo ok'})
    
})
server.listen(3001, () => {
    console.log("Rodando: http://localhost:3001/")
})