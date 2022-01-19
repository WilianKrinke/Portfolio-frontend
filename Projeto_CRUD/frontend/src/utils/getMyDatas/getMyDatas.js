import baseUrl from "../baseUrl";
import preAuth from "../Auth/preAuth";


export default async function getMyDatas(){
    try {
        preAuth();
        const response = await baseUrl.get('/my-datas')

        console.log(response)
    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return null;
    }
}