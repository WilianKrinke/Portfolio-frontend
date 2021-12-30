const knex = require('../../connection/connection')
const deleteTokenFromDb = require('./deleteTokenFromDb')

async function insertPassIntoDb(newPassData){
    try {
        const {newPassCrypt,idUser} = newPassData
        const response = await knex('users').where('idUser', idUser).update({pass: newPassCrypt})

        if (response === 1) {
            const wasTokenDeleted = await deleteTokenFromDb(newPassData)

            if (wasTokenDeleted) {
                console.log('O token foi deletado')                
            } else{
                console.log('O token Não foi deletado')
            }

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

