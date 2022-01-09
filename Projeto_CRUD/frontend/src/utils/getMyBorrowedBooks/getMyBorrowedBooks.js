import baseUrl from "../baseUrl";

export default async function getMyBorrowedBooks(){
    try {
        const response = await baseUrl.get('/my-borrowed-book-list');
        const {data} = response;

        return data;
    } catch (error) {
        //
    }
}