/* eslint-disable no-unused-vars */
import baseUrl from "../baseUrl"
import cryptUpdate from "../crypto/cryptUpdate"
import preAuth from '../Auth/preAuth'
import { isValidUser } from "../validations/validUser"

export default async function upDateData(objectData){
    try {
        const {data, option} = objectData
        const {isValid} = isValidUser(data)
        const encryptedData = cryptUpdate(data)
        
        if(isValid === true){
            preAuth()
            const response = await baseUrl.post('/update-data', {
                encryptedData,
                option
            })

            console.log(response)

        } else{
            return null
        }

    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return null
    }
}