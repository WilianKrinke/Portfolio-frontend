import preAuth from '../Auth/preAuth';
import baseUrl from '../baseUrl'
import cryptLendBook from '../crypto/doCryptLendBook';

export default async function returnBook(returnBookData){  
    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(returnBookData)

    try {
        preAuth()
        const response = await baseUrl.post(`/return-book`,{
            idBookC,
            bookNameC,
            userIdC,
            userNameC
        })

        return response.data;        
    } catch (error) {
        console.log(error)
    }
}