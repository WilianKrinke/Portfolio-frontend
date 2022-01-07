import baseUrl from "../baseUrl";

export default async function getMyBorrowedBooks(navigate){
    try {
        const response = await baseUrl.get('/my-borrowed-book-list');
        const {data} = response;

        if (data === false) {
            console.log('Token Inválido')
            navigate('/')
        } else {
            console.log('Token Válido')
        }
        return response;
    } catch (error) {
        //
    }
}