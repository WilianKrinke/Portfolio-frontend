import baseUrl from "../baseUrl"

export default async function sendRating(rating){
    

    try {
        const response = await baseUrl.put(`/change-rating/${rating}`)
        console.log(response)
    } catch (error) {
        //
    }
}