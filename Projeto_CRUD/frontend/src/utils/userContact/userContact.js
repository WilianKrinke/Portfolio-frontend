import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function userContact(objectMessage){
    preAuth()
    const response = await baseUrl.post('/contact-message',{
        objectMessage
    })

    const {data} = response;
    return data
}