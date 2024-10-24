import { z } from "zod"


//validando se uma variável tiver determinado tipo de valor

//dizendo que o padrão é uma string
//const schema = z.string().min(2) // dizendo que tem pelo menos 2 caracteres
/**
 * depois que estipulado um schema com as definições dos dados
 * semprew irá aparecer erro casso os dados não atendam o que foi exigido
 */
const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
})
let data = {
    name: 'Bruno',
    email: 'addler676@gmail.com',
    age: 20



}
//testanto um schema
//testando utilizando parse
//para executar o parse com segurança é bom englobar ele dentro de um try catch, pois 
//o erro que ele acusa é muito exagerado
//const result = schema.parse(data)

//O objetivo do safe parse é um parse seguro, ou seja
//não irá explodir um erro na tela
const resultFromSafeParse = schema.safeParse(data)

if(resultFromSafeParse.success){
    console.log("Deu tudo certo com a requisição")
    console.log(resultFromSafeParse.data)
}else{
    console.log("Deu errado")
}