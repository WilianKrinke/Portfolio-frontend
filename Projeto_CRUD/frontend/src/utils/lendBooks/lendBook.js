/* eslint-disable no-unused-vars */
import preAuth from '../Auth/preAuth';
import baseUrl from '../baseUrl'

export default async function lendBook(lendDatas){

    const {idBook,bookName,userId,userName} = lendDatas;
    
    try {
        preAuth()
        const response = await baseUrl.get(`/book-lend/${idBook}&${bookName}&${userId}&${userName}`)
        console.log(response)        
    } catch (error) {
        console.log(error)
    }
}