import express from 'express'
import { createContact, deleteContact, getContacts } from '../services/contatact'

const router = express.Router()


router.post("/contato",  async (req, res) => {
    //req.body para pegar os dados do body que terá o nome
    const {name} = req.body

    if(!name || name.length < 2){
        res.json({error: 'Nome precisa ter pelo menos 2 caracteres'})
    return
    }
    await createContact(name)
    //retorna o status caso seja processado tudo corretamente
    res.status(201).json({contato: name})
})
router.get('/contatos', async (req, res) => {
    let list = await getContacts()
    res.json({list})
})

router.delete('/contato', async (req, res) => {
    const {name} = req.query
    if(!name){
        res.json({error: 'precisa mandar um nome para excluir'})
    }
    await deleteContact(name as string)

    res.json({contato: name})
})
export default router