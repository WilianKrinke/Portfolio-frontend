const knex = require('../../connection/connection')

async function getPass(userName) {   
    const response = await knex('nodecrud.users').where('userName', userName.toLowerCase()).select('idUser', 'userName', 'pass')

    if (response[0] != undefined) {
        return response[0];            
    } else {
       throw new Error('User not found')
    } 
}

module.exports = getPass;