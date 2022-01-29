import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function userContact(objectMessage){

    console.log(objectMessage)

    preAuth()
    const response = await baseUrl.post('/contact-message',{
        objectMessage
    })
    console.log(response);
}