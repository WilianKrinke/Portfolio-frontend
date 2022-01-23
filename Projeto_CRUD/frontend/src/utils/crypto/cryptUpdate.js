/* eslint-disable no-undef */
import CryptoJS from "crypto-js";

export default function cryptUpdate(data){
    const cipherText = CryptoJS.AES.encrypt(data, process.env.REACT_APP_SALT2).toString()
    return cipherText;
}