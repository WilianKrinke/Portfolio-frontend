const knex = require("../../connection/connection");

async function insertTokenInDb(idUser, token, hashExpires){
    const response = await knex('resetpass').insert({
        idUser: idUser,
        hash: token,
        timeExpired: hashExpires
    })

    if (response[0] === undefined) {
        return false
    } else {
        return true
    }
}

module.exports = insertTokenInDb;