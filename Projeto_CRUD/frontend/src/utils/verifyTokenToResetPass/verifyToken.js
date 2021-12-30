import baseUrl from "../baseUrl";
import {getTime} from "date-fns"

export default async function verifyToken(token,idUser){

    try {
        const today = new Date()
        const todayTimeStamp = getTime(today)
    
        const response = await baseUrl.post(`/verify-token`,{
            token,
            idUser,
            todayTimeStamp
        })
        
        return response;        
    } catch (error) {
        console.log(error)
        return null;
    }

}