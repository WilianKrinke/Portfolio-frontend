import baseUrl from '../baseUrl';
import { doCrypt } from '../crypto/doCrypto';
import { isValidEmail } from '../validations/validEmail';
import { isValidPass } from '../validations/validPass';
import { isValidUser } from '../validations/validUser';

export async function sendDatas(datas) {
    const wasValidUserName = isValidUser(datas.userName)
    const wasValidEmail = isValidEmail(datas.email)
    const wasValidPass = isValidPass(datas.pass, datas.passConfirmed)

    if (wasValidUserName.isValid === false) {        
        const {message} = wasValidUserName
        throw new Error(message)

    } else if(wasValidEmail.isValid === false){        
        const {message} = wasValidEmail
        throw new Error(message)

    } else if(wasValidPass.isValid === false){        
        const {message} = wasValidPass
        throw new Error(message)

    } else{
        const passCrypt = doCrypt(datas.pass);
        const response = await baseUrl.post(`/sign-up-user`, {
            userName: datas.userName,
            email: datas.email,
            pass: passCrypt,
        });

       const {data} = response;
       return data;
        
    }
}