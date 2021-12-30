import baseUrl from '../baseUrl';
import { doCrypt } from '../crypto/doCrypto';
import { isValidEmail } from '../validations/validEmail';
import { isValidPass } from '../validations/validPass'
import { isValidUser } from '../validations/validUser'

export async function sendDatas(datas) {

    try {
        const wasValidUserName = isValidUser(datas.userName)
        const wasValidEmail = isValidEmail(datas.email)
        const wasValidPass = isValidPass(datas.pass, datas.passConfirmed)

        if (wasValidUserName.isValid === false) {        
            return wasValidUserName

        } else if(wasValidEmail.isValid === false){        
            return wasValidEmail

        } else if(wasValidPass.isValid === false){        
            return wasValidPass

        } else{
            const passCrypt = doCrypt(datas.pass);
            const response = await baseUrl.post(`/sign-up-user`, {
                userName: datas.userName,
                email: datas.email,
                pass: passCrypt,
            }); 

            if (response.data == true) {
                const controlArray = [true, response.data]
                return controlArray;      
            } else {
                const controlArray = [false, 'Problemas no servidor, avise o administrador do site']
                return controlArray
            }
        }

    } catch (error) {
        const controlArray = [false, error]
        return controlArray;
    }
}