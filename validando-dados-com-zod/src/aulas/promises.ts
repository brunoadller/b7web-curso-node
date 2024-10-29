import z from 'zod'


const pattern = z.object({
    age: z.number()
})
const promisePattern = z.promise(pattern)

const apiResponse = Promise.resolve({
    age:90
})
export const result = promisePattern.parse(apiResponse)
