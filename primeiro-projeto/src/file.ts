import {writeFile, readFile, unlink} from 'fs/promises'
/**
 * POr isso é usando função asiíncrona, pois há uma espera para grvar os dados
 */
const execWrite = async () => {
    console.log("Escrevendo no arquivo...")


    const list = ['bonieky', 'Bruno', 'Felipe']
    const listText = list.join('\n')
    //Para escrever com node em um arquivo
    await writeFile("./teste.txt", listText)
    console.log('Pronto')
}

const execRead = async () => {
    //utilizado para ler o arquivo, tem que colcar o padrão utf8, pois se não ele voltará como bytes
    const fileContent = await readFile('./teste.txt',{encoding: 'utf8'})
    const list = fileContent.split("\n");
  
}

const execUpdate = async () => {
    //para atualizar um arquivo tem que combinar os recursos de le e escrever

    const fileContent = await readFile('./teste.txt', {encoding: 'utf8'})
    const list = fileContent.split('\n')
    list.push('Fulano')
    
    const writeNewText = list.join('\n')
    await writeFile('./teste.txt', writeNewText)
}
const execDelete = async () => {
    //unlink para excluir
    await unlink('./teste.txt')
}
execDelete()