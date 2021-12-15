import preAuth from '../Auth/preAuth';
import baseUrl from '../baseUrl'
import cryptLendBook from '../crypto/doCryptLendBook';

export default async function isBorrowedByUser(userAndBookDatas){

    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(userAndBookDatas)

    try {
        preAuth()
        const response = await baseUrl.post(`/is-borrowed`,{
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