import preAuth from "../Auth/preAuth";
import baseUrl from "../baseUrl";

export default async function applyUserPenalty(){
    preAuth();
    const response = await baseUrl.post('/apply-user-penalty')

    console.log(response)
}