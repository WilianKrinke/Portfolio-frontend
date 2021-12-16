const knex = require('../../connection/connection')

async function getPass(userName) {
    try {
        const datasReceived = await knex('nodecrud.users').where({
            userName: userName
        }).select('idUser', 'userName', 'pass', 'adm', 'isBlock')
        
        return datasReceived;
        
    } catch (error) {
        console.log(error)
        return null;
    }  
}

module.exports = getPass;