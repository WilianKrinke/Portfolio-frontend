import preAuth from '../Auth/preAuth';
import baseUrl from '../baseUrl';
import cryptLendBook from '../crypto/doCryptLendBook';

export default async function lendBook(lendDatas){
    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(lendDatas)
    const {author,category,image,resume,rating} = lendDatas
    
    preAuth()
    const response = await baseUrl.post(`/book-lend`,{
        idBookC,
        bookNameC,
        userIdC,
        userNameC,
        author,
        category,
        image,
        resume,
        rating
    })

    return response.data    
}