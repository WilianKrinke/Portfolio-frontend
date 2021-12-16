import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";
import cryptLendBook from "../crypto/doCryptLendBook";

export default async function addFavorites(datas) {
    console.log(datas)

    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(datas)
    const {author,resume,rating,category} = datas;

    try {
        preAuth()
        const response = await baseUrl.post('/add-favorite', {
            idBookC,
            bookNameC,
            userIdC,
            userNameC,
            author,
            resume,
            rating,
            category
        })

        return response;
        
    } catch (error) {
        console.log(error)
    }
}