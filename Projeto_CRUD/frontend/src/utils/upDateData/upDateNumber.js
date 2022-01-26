import preAuth from "../Auth/preAuth"
import baseUrl from "../baseUrl"
import cryptUpdate from "../crypto/cryptUpdate"
import validAgeUser from "../validations/validAgeUser"

export default async function upDateNumber(objectData){
    const {data, option} = objectData

    const {isValid} = validAgeUser(data)
    const encryptedData = cryptUpdate(data)

    if(isValid === true){
        preAuth()
        const response = await baseUrl.post('/update-data', {
            encryptedData,
            option
        })

        const {data} = response;
        return data;

    } else {
        throw new Error('Contains Inappropriate Characters')
    }  
}