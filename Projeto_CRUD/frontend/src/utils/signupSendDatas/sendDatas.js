import baseUrl from '../baseUrl';
import { doCrypt } from '../crypto/doCrypto';
import { isValidEmail } from '../validations/validEmail';
import { isValidPass } from '../validations/validPass'
import { isValidUser } from '../validations/validUser'

export async function sendDatas(datas) {

    const wasValidUserName = isValidUser(datas.userName)
    const wasValidEmail = isValidEmail(datas.email)
    const wasValidPass = isValidPass(datas.pass, datas.passConfirmed)

    if (wasValidUserName[0] == false) {
        const controlArray = [false, wasValidUserName[1]]
        return controlArray
    } else if(wasValidEmail[0] == false){
        const controlArray = [false, wasValidEmail[1]]
        return controlArray
    } else if(wasValidPass[0] == false){
        const controlArray = [false, wasValidPass[1]]
        return controlArray
    } else{
        try {
            console.log('Linha 24 signupDatas')
            
            
            const passCrypt = doCrypt(datas.pass);
            console.log('Linha 28 signupDatas')
            const request = await baseUrl.post(`/sign-in`, {
                userName: datas.userName,
                email: datas.email,
                pass: passCrypt,
            });            

            if (request.data == true) {
                const controlArray = [true, request.data]
                return controlArray;      
            } else {
                const controlArray = [false, 'Problemas no servidor, avise o administrador do site']
                return controlArray
            }

        } catch (error) {
            const controlArray = [false, error]
            return controlArray;
        }
    }
}