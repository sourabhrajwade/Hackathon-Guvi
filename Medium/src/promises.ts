// const baseApi = 'https://reqres.in/api/users?page=1'
// const userApi = 'https://reqres.in/api/user'

// const fetchAllEmployees = async (url: string): Promise<Employee[]> => {
//     const response = await fetch(url)
//     const { data } = await response.json()
//     return data
// }

// const fetchEmployee = async (url: string, id: number): Promise<Record<string, string>> => {
//     const response = await fetch(`${url}/${id}`)
//     const { data } = await response.json()
//     return data
// }
// const generateEmail = (name: string): string => {
//     return `${name.split(' ').join('.')}@company.com`
// }

// const runAsyncFunctions = async () => {
//     try {
//         const employees = await fetchAllEmployees(baseApi)
//         Promise.all(
//             employees.map(async user => {
//                 const userName = await fetchEmployee(userApi, user.id)
//                 const emails = generateEmail(userName.name)
//                 return emails
//             })
//         )
//     } catch (error) {
//         console.log(error)
//     }
// }
// runAsyncFunctions()


// text editor
