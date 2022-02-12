import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function applyUserPenalty(){
    preAuth();
    console.log('Fazendo requisição')
    const response = await baseUrl.post('/apply-user-penalty')

    console.log(response)
}