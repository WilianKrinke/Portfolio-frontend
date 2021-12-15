import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";
import cryptLendBook from "../crypto/doCryptLendBook";

export default async function addFavorites(datas) {

    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(datas)

    try {
        preAuth()
        const response = await baseUrl.post('/add-favorite', {
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