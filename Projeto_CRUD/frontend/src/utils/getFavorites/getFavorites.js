import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function getFavorites(){    
    preAuth();
    const response = await baseUrl('/get-favorites')
    const {data} = response;
    
    return data;
}