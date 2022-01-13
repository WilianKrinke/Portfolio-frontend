import baseUrl from "../baseUrl";

export default async function getFavorites(){
    try {
        const response = await baseUrl('/get-favorites')
        const {data} = response;
        return data;
    } catch (error) {
        console.log(error)
        return null
    }

}