import baseUrl from "../baseUrl";
import preAuth from "../Auth/preAuth";

export default async function getMyDatas(){   
    preAuth();
    const response = await baseUrl.get('/my-datas')
    const {data} = response
    return data;    
}