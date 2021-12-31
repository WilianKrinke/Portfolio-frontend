import baseUrl from '../baseUrl'

export default async function reqRecoverPass(userName){
    
    try {
        const response = await baseUrl.post('/forgot-pass', {
            userName
        })

        const {data} = response
        return data;
        
    } catch (error) {        
        console.log(error);
        return null;
    }
}