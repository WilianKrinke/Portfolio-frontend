import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl"

export default async function sendRating(rating, idBook){  
    try {
        preAuth()
        const response = await baseUrl.post('/change-rating', {
            rating,
            idBook
        })
        const {data} = response
        return data;
    } catch (error) {
        return error
    }
}