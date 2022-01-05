import baseUrl from '../baseUrl'
import { isValidUser } from '../validations/validUser';

export default async function reqRecoverPass(userName){
    try {
        const isValidUserName = isValidUser(userName)

        if (isValidUserName.isValid) {
            const response = await baseUrl.post('/forgot-pass', {
                userName
            })    
            const {data} = response
            return data;            
        } else {
            return null;
        }        
    } catch (error) {        
        console.log(error);
        return null;
    }
}