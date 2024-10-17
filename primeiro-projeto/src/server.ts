import express from "express";
import helmet from 'helmet'
import path from 'path'
import { router } from "./routes";
/*
*COMO ERA O CÓDIGO ANTES DO EXPRESS
*

import {createServer} from 'node:http'


const server = createServer((req, res) => {
    res.end("Ola Mundo")
});

server.listen(3000, () => {
    console.log("Servidor funcionando em http://localhost:3000")
})
*/
//CÓDIGO COM EXPRESS

const server = express();

//CONFIGURAÇÕES HELMET
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended:true}))//Pegar um dado da requisição
//irá servir para configurar algo que seja publico por exemplo
server.use(express.static(path.join(__dirname, '../public')))//liberar os arquivos staticos



server.use('/', router)
server.listen(3000, () => {
    console.log('Servidor está rodando no link: http://localhost:3000/')
})