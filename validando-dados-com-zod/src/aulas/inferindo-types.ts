import z from 'zod'

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age:  z.number().min(18).max(120),
    status: z.boolean(),
    //tenho um array de características que é um objeto com valores
    cahacteristics: z.array(
        z.object({
            name:z.string(),
            value: z.number()
        })
    )
})
/**
 * 
 * Ao invés de criar outyro type, como você já usa o schema para definir
 * você pode inferir o tipo dos dados sem precisar criar um type
type User = {
    name: string;
    email: string
    age: number

} 
*/

//desta forma eles serão iferidos

type User = z.infer<typeof schema>
let data: User = {
    name: 'Bruno',
    email: "adller676@gmail.com",
    age: 90,
    status: true,
    cahacteristics:[
        {name:"jokey",value: 4},
        {name: "children", value: 7}
    ]
}

const result = schema.safeParse(data)

if(result.success){
    console.log(data)
}else{
    console.log(result.data)
}
