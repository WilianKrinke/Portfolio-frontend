/* eslint-disable no-unused-vars */
import axios from 'axios';
import { isValidEmail } from './validations/validEmail';
import { isValidPass } from './validations/validPass'
import { isValidUser } from './validations/validUser'

export async function sendDatas(datas) {

    const wasValidEmail = isValidEmail(datas.email);
    const wasValidPass = isValidPass(datas.pass, datas.passConfirmed)
    const wasValidUserName = isValidUser(datas.userName)

    //verificar se as condições estão válidas





    try {
        const request = await axios.post('http://localhost:3001/sign-in', datas);
        return request.data;        
    } catch (error) {
        return error;
    }
}