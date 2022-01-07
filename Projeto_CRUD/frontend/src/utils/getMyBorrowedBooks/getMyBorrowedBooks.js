import baseUrl from "../baseUrl";

export default async function getMyBorrowedBooks(){
    try {
        console.log('Passou por aqui')
        const response = await baseUrl.get('/my-borrowed-book-list');
        console.log(response);
        return response;
    } catch (error) {
        //
    }
}