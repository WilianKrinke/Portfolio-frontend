/* eslint-disable no-undef */
import CryptoJS from "crypto-js";
import baseUrl from '../baseUrl'
import insertSessionToken from "../insertions/insertSessionToken";

export async function sendSignIn(datas){     
    const ciphertext = CryptoJS.AES.encrypt(datas.pass, process.env.REACT_APP_SALT2).toString();
    const response = await baseUrl.post(`/login`, {
        userName: datas.userName,
        pass: ciphertext
    })

    if(response.status === 500){
        console.log('Entrou no if de erro')
        throw new Error('Server Error')
    }

    const {data} = response
            
    insertSessionToken(data.token)
    return data
}


