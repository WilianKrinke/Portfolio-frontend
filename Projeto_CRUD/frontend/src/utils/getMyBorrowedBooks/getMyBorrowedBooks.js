import baseUrl from "../baseUrl";

export default async function getMyBorrowedBooks(navigate){
    try {
        const response = await baseUrl.get('/my-borrowed-book-list');
        const {data} = response;

        if (data === false) {
            navigate('/')
        } else {
            return data;
        }
    } catch (error) {
        //
    }
}