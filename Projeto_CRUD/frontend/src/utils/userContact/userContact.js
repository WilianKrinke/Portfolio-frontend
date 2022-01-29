import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function userContact(objectDatas){

    console.log(objectDatas)

    preAuth()
    const response = await baseUrl.post('/contact-message',{
        objectDatas
    })
    console.log(response);
}