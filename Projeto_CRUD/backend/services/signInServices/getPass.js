const knex = require('../../connection/connection')

async function getPass(userName) {   
    const response = await knex('users').where('userName', userName.toLowerCase()).select('idUser', 'userName', 'pass')

    if (response[0] != undefined) {
        return response;            
    } else {
       throw new Error('User not found')
    } 
}

module.exports = getPass;