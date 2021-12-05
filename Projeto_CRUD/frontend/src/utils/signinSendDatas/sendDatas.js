import CryptoJS from "crypto-js";
import baseUrl from '../baseUrl'
import { SALT2 } from '../crypto/env';

export async function sendSignIn(datas){

    const ciphertext = CryptoJS.AES.encrypt(datas.pass, SALT2).toString();

    try {
        const request = await baseUrl.post(`/login`, {
            userName: datas.userName,
            pass: ciphertext
        })

        if (request.data[0] == true) {
            sessionStorage.setItem('token', JSON.stringify(request.data[1]));
        } 

        return request.data[0]

        
    } catch (error) {
        return false;     
    } 
}


