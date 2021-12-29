const knex = require("../../connection/connection");

async function deleteTokenFromDb(objectDatas){
    try {
        const {token} = objectDatas    
        const response = await knex('resetpass').where('hash', token).del()
    
        if (response[0] !== undefined) {
            return true
        } else {
            return false
        }
        
    } catch (error) {
        console.log(error)
        return false
    }

}

module.exports = deleteTokenFromDb;