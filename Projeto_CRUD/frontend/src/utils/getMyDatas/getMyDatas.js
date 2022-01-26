import baseUrl from "../baseUrl";
import preAuth from "../Auth/preAuth";

export default async function getMyDatas(){
    try {
        preAuth();
        const response = await baseUrl.get('/my-datas')
        const {data} = response
        return data;
    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return null;
    }
}