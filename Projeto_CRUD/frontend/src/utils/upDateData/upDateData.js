import { isValidUser } from "../validations/validUser"

export default async function upDateData(objectData){
    try {
        console.log(objectData)
        const {data} = objectData

        const isValidData = isValidUser(data)
        
        if(isValidData === true){
            //fazer requisição
        } else{
            return null
        }

    } catch (e) {
        const error = new Error(e)
        console.log(error.message)
        return null
    }
}