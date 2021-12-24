/* eslint-disable no-unused-vars */
import baseUrl from '../baseUrl'

export default async function reqRecoverPass(userName){
    console.log(userName);

    const response = await baseUrl.post('/forgot-pass', {
        userName
    })
}