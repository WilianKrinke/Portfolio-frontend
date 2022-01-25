const upDateClass = require('./upDateClass')

async function controllerUpdateData(objectDatas){
    const {data,option,idUser} = objectDatas
    console.log(objectDatas)
    const upDateObject = new upDateClass(idUser)

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
            const responseBirth = await upDateObject.upDateBirth(data)
            return responseBirth
        case 5:
            console.log('Atualizar 5') 
            break;
        case 6:
            console.log('Atualizar 6') 
            break;
        case 7:
            console.log('Atualizar 7') 
            break;
        case 8:
            console.log('Atualizar 8') 
            break;
        case 9:
            console.log('Atualizar 9') 
            break;
        case 10:
            console.log('Atualizar 10') 
            break;
        case 11:
            console.log('Atualizar 11') 
            break;   
    
        default:
            break;
    }
}

module.exports = controllerUpdateData;