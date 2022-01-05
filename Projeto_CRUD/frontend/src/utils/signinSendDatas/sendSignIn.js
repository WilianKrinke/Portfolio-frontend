/* eslint-disable no-undef */
import CryptoJS from "crypto-js";
import baseUrl from '../baseUrl'
import insertSessionToken from "../insertions/insertSessionToken";

export async function sendSignIn(datas){

    const ciphertext = CryptoJS.AES.encrypt(datas.pass, process.env.REACT_APP_SALT2).toString();

    try {
        const response = await baseUrl.post(`/login`, {
            userName: datas.userName,
            pass: ciphertext
        })

        console.log(response)

        const {data} = response

        if (data.authenticate === true) {            
            insertSessionToken(data.token)
            return data
        } else {
            return data
        }
    } catch (error) {
        return false;     
    } 
}


