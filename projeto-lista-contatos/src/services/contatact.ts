import {readFile, writeFile} from 'fs/promises'

const dataSource = './data/list.txt'

export const getContacts = async () => {
    let list: string[] = []
    try{
        const data = await readFile(dataSource, { encoding: 'utf8'})
        list = data.split('\n')
       
    }catch(err){}

    return list
}

export const createContact = async (name: string) => {
     //processamento dos dados
     let list = await getContacts()

     list.push(name)
     await writeFile(dataSource, list.join('\n') )
 
}

export const deleteContact = async (name: string) => {
    let list = await getContacts()
    let filterArray: string[] =[]
    filterArray = list.filter(item => item.toLowerCase() !== name.toLowerCase())
    
    const joinArray = filterArray.join('\n')
    await writeFile(dataSource, joinArray)
}