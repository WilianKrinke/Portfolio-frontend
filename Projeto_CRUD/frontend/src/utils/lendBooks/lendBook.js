/* eslint-disable no-unused-vars */
import preAuth from '../Auth/preAuth';
import baseUrl from '../baseUrl'
import cryptLendBook from '../crypto/doCryptLendBook';

export default async function lendBook(lendDatas){

    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(lendDatas)

    try {
        preAuth()
        const response = await baseUrl.post(`/book-lend`,{
            idBookC,
            bookNameC,
            userIdC,
            userNameC
        })
        return response;        
    } catch (error) {
        console.log(error)
    }
}