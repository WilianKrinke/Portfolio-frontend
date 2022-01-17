import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function getMyBorrowedBooks(){
    try {
        preAuth();
        const response = await baseUrl.get('/my-borrowed-book-list');
        const {data} = response;

        return data;
    } catch (error) {
        console.log(error)
        return null
    }
}