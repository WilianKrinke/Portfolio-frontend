/* eslint-disable no-unused-vars */
import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export async function removeFavorite(objectDatas){
   
    const {idBook, bookName, userId, userName} = objectDatas;

    try {
        preAuth();
        const response = await baseUrl.post('/remove-favorite',{
            idBook,
            bookName,
            userId,
            userName
        })
    
        return response.data;
    } catch (error) {
        return error;
    }

    
}