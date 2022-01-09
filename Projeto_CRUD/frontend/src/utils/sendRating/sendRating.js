import baseUrl from "../baseUrl"

export default async function sendRating(rating, idBook){  
    try {
        const response = await baseUrl.put(`/change-rating/${rating}/${idBook}`)
        return response.data;
    } catch (error) {
        return error
    }
}