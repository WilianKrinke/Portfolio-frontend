const knex = require('../../connection/connection')

async function insertPassIntoDb(newPassData){
    try {
        const {newPassCrypt,idUser} = newPassData
        const response = await knex('users').where('idUser', idUser).update({pass: newPassCrypt})

        if (response === 1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)       
        return false;
    }
}

module.exports = insertPassIntoDb;

