import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function isUserBlocked(){
    preAuth()
    const response = await baseUrl.get('/is-user-blocked')
    const {data:{isBlock}} = response;
    return isBlock;    
}