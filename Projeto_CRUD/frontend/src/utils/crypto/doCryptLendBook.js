/* eslint-disable no-undef */
import CryptoJS from "crypto-js";

export default function cryptLendBook(lendDatas){
    const {idBook,bookName,idUser,userName} = lendDatas

    const idBookC = CryptoJS.AES.encrypt(idBook + " " + process.env.REACT_APP_SECRET3, process.env.REACT_APP_SECRET2).toString()
    const bookNameC = CryptoJS.AES.encrypt(bookName, process.env.REACT_APP_SECRET2).toString()
    const userIdC = CryptoJS.AES.encrypt(idUser + " " + process.env.REACT_APP_SECRET3, process.env.REACT_APP_SECRET2).toString()
    const userNameC = CryptoJS.AES.encrypt(userName.replace(/['"]+/g, ''), process.env.REACT_APP_SECRET2).toString()

    const lendDatasC = {
        idBookC,
        bookNameC,
        userIdC,
        userNameC
    }

    return lendDatasC;    
}