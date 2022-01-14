import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";
import cryptLendBook from "../crypto/doCryptLendBook";

export default async function addFavorites(datas) {
    const {idBookC,bookNameC,userIdC,userNameC} = cryptLendBook(datas)
    const {author,resume,rating,category, image} = datas;

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
            category,
            image
        })

        const {data} = response

        return data;
        
    } catch (error) {
        console.log(error)
    }
}