const CryptoJS = require("crypto-js");

function decryptLendDatas(datas){
    const {idBookC, bookNameC, userIdC, userNameC} = datas
    const { author,resume,rating,category, image} = datas

    const idBookCBytes  = CryptoJS.AES.decrypt(idBookC, process.env.SECRET2);
    const bookNameCBytes  = CryptoJS.AES.decrypt(bookNameC, process.env.SECRET2);
    const userIdCBytes  = CryptoJS.AES.decrypt(userIdC, process.env.SECRET2);
    const userNameCBytes  = CryptoJS.AES.decrypt(userNameC, process.env.SECRET2);

    const idBookConcat = idBookCBytes.toString(CryptoJS.enc.Utf8);
    const bookName = bookNameCBytes.toString(CryptoJS.enc.Utf8);
    const userIdConcat = userIdCBytes.toString(CryptoJS.enc.Utf8);
    const userName = userNameCBytes.toString(CryptoJS.enc.Utf8);

    const idBookArray = idBookConcat.split(" ")
    const userIdArray = userIdConcat.split(" ")
    
    const idBook = idBookArray[0];
    const userId = userIdArray[0];

    return {
        idBook,
        bookName,
        userId,
        userName,
        author,
        resume,
        rating,
        category,
        image
    }
}

module.exports = decryptLendDatas;