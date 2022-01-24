/* eslint-disable no-unused-vars */
import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export async function removeFavorite(objectDatas){   
    const {idBook, bookName, idUser, userName} = objectDatas;    
    
    preAuth();
    const response = await baseUrl.post('/remove-favorite',{
        idBook,
        bookName,
        idUser,
        userName
    })

    return response.data;
}