const knex = require('../../connection/connection')

async function getDatas(idUser){
    const response = await knex('users').where('idUser', idUser);
    //fazer seleção de dados

    if (response[0] !== undefined) {
       return response
    } else{
       return null
    }
}

module.exports = getDatas;