const lastUpdate = require('../../repository/upDatesDatasRepository/lastUpdate')
const upDateClass = require('../../repository/upDatesDatasRepository/upDateClass')


async function optionsUpdateData(objectDatas){
    const {data,option,idUser,last_update} = objectDatas
    const upDateObject = new upDateClass(idUser)

    lastUpdate(idUser,last_update)

    switch (option) {
        case 1:
            const responseUserName = await upDateObject.upDateUserName(data)
            return responseUserName
        case 2:
            const responseFirstName = await upDateObject.upDateFirstName(data)
            return responseFirstName
        case 3:
            const responseSecondName = await upDateObject.upDateSecondName(data)
            return responseSecondName
        case 4:
            const responseAge = await upDateObject.upDateAge(data)
            return responseAge
        case 5:
            const responseAdressStreet = await upDateObject.upDateAdressStreet(data)
            return responseAdressStreet
        case 6:
            const responseAdressNeighborhood = await upDateObject.upDateAdressNeighborhood(data)
            return responseAdressNeighborhood
        case 7:
            const responseAdressNumber = await upDateObject.upDateAdressNumber(data)
            return responseAdressNumber
        case 8:
            const responseCityAdress = await upDateObject.upDateCityAdress(data)
            return responseCityAdress
        case 9:
            const responseupDateEmail = await upDateObject.upDateEmail(data)
            return responseupDateEmail
        case 10:
            const responseupDateCellPhone = await upDateObject.upDateCellPhone(data)
            return responseupDateCellPhone
        case 11:
            const responseupDateLandLine = await upDateObject.upDateLandLine(data)
            return responseupDateLandLine   
    
        default:
            break;
    }
}

module.exports = optionsUpdateData;