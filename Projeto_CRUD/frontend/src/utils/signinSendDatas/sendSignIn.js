/* eslint-disable no-undef */
import CryptoJS from "crypto-js";
import baseUrl from '../baseUrl';
import insertSessionToken from "../insertions/insertSessionToken";

export async function sendSignIn(datas){  
    const ciphertext = CryptoJS.AES.encrypt(datas.pass, process.env.REACT_APP_SECRET3).toString();

    const response = await baseUrl.post(`/login`, {
        userName: datas.userName,
        pass: ciphertext
    })

    if(response.status === 500){
        throw new Error('Incorrect username or password')
    }

    const {data} = response
            
    insertSessionToken(data.token)
    return data
}


