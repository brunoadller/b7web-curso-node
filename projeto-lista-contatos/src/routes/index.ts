import express from 'express'

import {writeFile, readFile} from 'fs/promises'

//variável para abrigar o caminho do arquivo
const dataSource = './data/list.txt'
const router = express.Router()


router.post("/contato",  async (req, res) => {
    //req.body para pegar os dados do body que terá o nome
    const {name} = req.body

    if(!name || name.length < 2){
        res.json({error: 'Nome precisa ter pelo menos 2 caracteres'})
    return
    }
    //processamento dos dados
    let list: string[] = []
    try{
        const data = await readFile(dataSource, { encoding: 'utf8'})
        list = data.split('\n')
       
    }catch(err){}
    list.push(name)
    const listJoin = list.join('\n')
    await writeFile(dataSource, listJoin )

    //retorna o status caso seja processado tudo corretamente
    res.status(201).json({contato: name})
})
router.get('/contatos', async (req, res) => {
    let list: string[] = []
    try{
        const data = await readFile(dataSource, {encoding: 'utf8'})
        list = data.split('\n')
        
    }catch(err){}

    res.json({list})
})

router.delete('/contato', async (req, res) => {
    const {name} = req.query
    let list: string[] = []
    let filterArray: string[] =[]

    if(!name){
        res.json({error: 'precisa mandar um nome para excluir'})
    }
    try{
        const data = await readFile(dataSource, {encoding: 'utf8'})
        list = data.split('\n')
        filterArray = list.filter(item => item.toLowerCase() !== (name as string).toLowerCase())
       
    }catch(err){}
    const joinArray = filterArray.join('\n')
    await writeFile(dataSource, joinArray)
    res.json({filterArray})
})
export default router