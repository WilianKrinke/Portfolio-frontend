const upDateClass = require('./upDateClass')

async function controllerUpdateData(objectDatas){
    const {data,option,idUser} = objectDatas
    console.log(objectDatas)

    switch (option) {
        case 1:
            const upDateObject = new upDateClass(idUser)
            const response = await upDateObject.upDateUserName(data)
            return response
        case 2:
            console.log('Atualizar 2') 
            break;
        case 3:
            console.log('Atualizar 3') 
            break;
        case 4:
            console.log('Atualizar 4') 
            break;
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