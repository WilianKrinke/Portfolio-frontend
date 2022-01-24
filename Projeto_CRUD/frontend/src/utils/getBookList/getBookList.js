import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function getBookList(category){    
    preAuth();
    const response = await baseUrl.get(`/books-list/${category}`);

    const {data} = response
    return data;        
    
}