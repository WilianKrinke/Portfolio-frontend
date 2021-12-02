/* eslint-disable no-unused-vars */
import axios from 'axios';
import { isValidEmail } from './validations/validEmail';
import { isValidPass } from './validations/validPass'
import { isValidUser } from './validations/validUser'

export async function sendDatas(datas) {

    const wasValidUserName = isValidUser(datas.userName)
    const wasValidEmail = isValidEmail(datas.email)
    const wasValidPass = isValidPass(datas.pass, datas.passConfirmed)

   if (wasValidUserName[0] == true && wasValidEmail[0] == true && wasValidPass[0] == true) {
        console.log('Dados Válidos')
   } else {
        console.log('Dados Inválidos')
   }




    try {
        const request = await axios.post('http://localhost:3001/sign-in', {
            userName: datas.userName,
            email: datas.email,
            pass: datas.pass
        });
        return request.data;        
    } catch (error) {
        return error;
    }
}