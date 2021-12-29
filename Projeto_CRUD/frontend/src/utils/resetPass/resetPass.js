import baseUrl from "../baseUrl";

export default async function resetPass(token,idUser){
    const response = await baseUrl.post(`/verify-token`,{
        token,
        idUser
    })
    
    return response;
}