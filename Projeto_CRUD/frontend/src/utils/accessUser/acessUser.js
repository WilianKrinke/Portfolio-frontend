import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function acessUser(){
    preAuth()
    const response = await baseUrl.get('/access-user')
    
    const {data} = response;
    return data;
}