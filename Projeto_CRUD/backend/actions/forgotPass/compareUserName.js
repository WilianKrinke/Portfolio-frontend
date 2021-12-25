const knex = require("../../connection/connection");

async function compareUserName(userName){
    const response = await knex('users').select('email').where('userName',userName)

    console.log(response)

    if (response[0] !== undefined) {
        return response[0];
    } else {
        console.log('Nao existe usuario')
    }
}

module.exports = compareUserName;