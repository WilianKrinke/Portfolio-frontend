import baseUrl from "../baseUrl";
import preAuth from "../Auth/preAuth";

export default async function isUpdateDatas(){   
    preAuth();
    const response = await baseUrl.get('/is-update')
    const {data} = response
    return data;    
}