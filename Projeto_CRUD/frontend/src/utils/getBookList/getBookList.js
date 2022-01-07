import baseUrl from "../baseUrl";

export default async function getBookList(category){
    try {
        const response = await baseUrl.get(`/books-list/${category}`);
        return response;        
    } catch (error) {
        console.log(error)
        return null
    }
}