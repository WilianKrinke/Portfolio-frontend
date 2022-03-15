const knex = require("../../connection/connection");

async function getChangePassToken(objectDatas){
    const {idUser} = objectDatas;
    const response = await knex('resetpass').where('idUser', idUser).select('hash', 'timeExpired')

    if(response[0] === undefined){
        throw new Error('Token Not Valid')
    } else {
        return response;
    }
}

module.exports = getChangePassToken;