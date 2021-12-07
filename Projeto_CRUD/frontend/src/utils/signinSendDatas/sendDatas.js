/* eslint-disable no-undef */
import CryptoJS from "crypto-js";
import baseUrl from '../baseUrl'
import insertSessionDatas from "./insertSessionDatas";

export async function sendSignIn(datas){

    const ciphertext = CryptoJS.AES.encrypt(datas.pass, process.env.REACT_APP_SALT2).toString();

    try {
        const request = await baseUrl.post(`/login`, {
            userName: datas.userName,
            pass: ciphertext
        })

        
        if (request.data[0] == true) {
            insertSessionDatas(request.data[1])
        } 

        return request.data[0]

    } catch (error) {
        return false;     
    } 
}


