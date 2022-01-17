import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl"

export default async function sendRating(rating, idBook){  
    try {
        preAuth()
        console.log(rating, idBook)
        const response = await baseUrl.post('/change-rating', {
            rating,
            idBook
        })
        return response.data;
    } catch (error) {
        return error
    }
}