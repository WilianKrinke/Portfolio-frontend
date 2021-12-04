/* eslint-disable no-unused-vars */
import axios from 'axios';
import CryptoJS from "crypto-js";
import { SALT2 } from '../crypto/env';


export async function sendSignIn(datas){
    const ciphertext = CryptoJS.AES.encrypt(datas.pass, SALT2).toString();

    try {
        const request = await axios.post('http://localhost:3001/login', {
            userName: datas.userName,
            pass: ciphertext
        })

        return request.data
        
    } catch (error) {
        return false;     
    }

   
}


