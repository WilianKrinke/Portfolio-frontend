const knex = require("../../connection/connection");

async function haveTokenValid(userDatas) {
    try {
        const {idUser} = userDatas    
        const response = await knex('resetpass').select().where('idUser', idUser)
    
        if (response[0] !== undefined) {
            //há token válido
            return true
        } else {
            return false
        }        
    } catch (error) {
        return false
    }
}


module.exports = haveTokenValid;