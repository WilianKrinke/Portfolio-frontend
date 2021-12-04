const knex = require('../connection/connection')

async function getPass(userName) {
    try {
        const datasReceived = await knex('nodecrud.users').where({
            userName: userName
        }).select('idUser', 'userName', 'pass', 'adm')
    
        console.log(datasReceived)
        const pass = datasReceived.map(item => item.pass)
        return pass;
        
    } catch (error) {
        console.log(error)
        return null;
    }  
}

module.exports = getPass;