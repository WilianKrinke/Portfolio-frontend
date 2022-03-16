/* eslint-disable no-undef */
import CryptoJS from "crypto-js";

export default function cryptUpdate(data){ 
    const cipherText = CryptoJS.AES.encrypt(data.toString(), process.env.REACT_APP_SECRET2).toString()
    return cipherText;
}