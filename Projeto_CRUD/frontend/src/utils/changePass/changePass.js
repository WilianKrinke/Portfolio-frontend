import baseUrl from "../baseUrl";
import { doCrypt } from "../crypto/doCrypto";

export default async function changePass(newPass,token,idUser){

    const newPassCrypt = doCrypt(newPass)

    const response = await baseUrl.post('/change-pass',{
        idUser,
        newPassCrypt,
        token
    })

    return response;
}