import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function getBookList(category){
    try {
        preAuth();
        const response = await baseUrl.get(`/books-list/${category}`);
        const {data} = response
        return data;        
    } catch (error) {
        console.log(error)
        return null
    }
}