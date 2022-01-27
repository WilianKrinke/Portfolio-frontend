import baseUrl from "../baseUrl"
import cryptUpdate from "../crypto/cryptUpdate"
import preAuth from '../Auth/preAuth'
import {format} from 'date-fns'
import { isValidUser } from "../validations/validUser"

export default async function upDateString(objectData){    
        const {data, option} = objectData
        const {isValid} = isValidUser(data)
        const encryptedData = cryptUpdate(data)

        const now = new Date()
        const last_update = format(now, "MMMM, dd, yyyy', at' HH:mm")
        
        
        if(isValid === true){
            preAuth()
            const response = await baseUrl.post('/update-data', {
                encryptedData,
                option,
                last_update
            })

            const {data} = response;
            return data;

        } else {
            throw new Error('Contains Inappropriate Characters')
        }    
}