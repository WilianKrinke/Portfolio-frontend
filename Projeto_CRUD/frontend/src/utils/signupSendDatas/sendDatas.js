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
            const objectResponse = {wasRegister: false, message: wasValidUserName.message}
            return objectResponse

        } else if(wasValidEmail.isValid === false){        
            const objectResponse = {wasRegister: false, message: wasValidEmail.message}
            return objectResponse

        } else if(wasValidPass.isValid === false){        
            const objectResponse = {wasRegister: false, message: wasValidPass.message}
            return objectResponse

        } else{
            const passCrypt = doCrypt(datas.pass);
            const response = await baseUrl.post(`/sign-up-user`, {
                userName: datas.userName,
                email: datas.email,
                pass: passCrypt,
            });

            const {data} = response;

            if (data === true) {
                const objectResponse = {wasRegister: true, message: 'User registered successfully!'}
                return objectResponse;
            } else {
                console.log('Erro no servidor')
                const objectResponse = {wasRegister: false, message: 'User has not been registered.'}
                return objectResponse
            }
        }

    } catch (error) {
        console.log(error)
        const objectResponse = {wasRegister: false, message: 'User has not been registered.'}
        return objectResponse
    }
}