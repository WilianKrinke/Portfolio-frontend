/* eslint-disable no-unused-vars */
import baseUrl from "../baseUrl"
import cryptUpdate from "../crypto/cryptUpdate"
import preAuth from '../Auth/preAuth'
import { isValidUser } from "../validations/validUser"

export default async function upDateData(objectData){
    try {
        console.log(objectData)
        const {data, option} = objectData

        const isValidData = isValidUser(data)
        const encryptedData = cryptUpdate(data)
        
        if(isValidData === true){
            preAuth()
            const response = await baseUrl.post('/update-data', {
                data: encryptedData,
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