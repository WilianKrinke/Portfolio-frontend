const knex = require('../../connection/connection')

async function getPass(userName) {
    try {
        const response = await knex('nodecrud.users').where({
            userName: userName
        }).select('idUser', 'userName', 'pass', 'adm', 'isBlock')


        if (response != null || []) {
            return response;            
        } else {
            return null
        }
        
        
    } catch (error) {
        console.log(error)
        return null;
    }  
}

module.exports = getPass;