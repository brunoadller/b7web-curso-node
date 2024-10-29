import z from 'zod'


//um representa pessoa
const person = z.object({
    name: z.string()
})

//outro representa empregado
const employee = z.object({
    role: z.string()
})
//intersecção por exmplo de uma pessoa que é empregada
 //z.intersection(person, employee) uma forma de fazer
 const employedPerson = person.and(employee)


export const result = employedPerson.parse({
    name: 'Bonieky',
    role: 'CEO'
})