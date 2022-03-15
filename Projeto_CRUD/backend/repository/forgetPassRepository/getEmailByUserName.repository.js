const knex = require("../../connection/connection");

async function getEmailByUserName(userName){
    const response = await knex('users').select('email', 'idUser').where('userName',userName)

    if (response[0] !== undefined) {
        return response[0];
    } else {
        return null;
    }
}

module.exports = getEmailByUserName;