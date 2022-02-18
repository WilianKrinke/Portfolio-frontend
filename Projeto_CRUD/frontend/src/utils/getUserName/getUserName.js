import baseUrl from "../baseUrl";

export default async function getUserName(){
    const response = await baseUrl.get('/get-user-name')

    const {data} = response
    return data;
}