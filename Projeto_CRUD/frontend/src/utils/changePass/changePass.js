import baseUrl from "../baseUrl";
import { doCrypt } from "../crypto/doCrypto";
import { isValidPass } from "../validations/validPass";

export default async function changePass(newPass, confirmPass, token, idUser){

    try {        
        const isValidPassword = isValidPass(newPass, confirmPass);
    
        if (isValidPassword.isValid === false) {
            return {wasUpdate: false};

        } else {
            const newPassCrypt = doCrypt(newPass)
        
            const response = await baseUrl.post('/change-pass',{
                idUser,
                newPassCrypt,
                token
            })
        

            return response.data;
        }

    } catch (error) {
        return {wasUpdate: false};
    }
}