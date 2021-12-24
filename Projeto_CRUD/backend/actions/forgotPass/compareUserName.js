const knex = require("../../connection/connection");

async function compareUserName(userName){
    const response = await knex('users').select('email').where('userName',userName)

    if (response[0] !== undefined) {
        console.log('tem usuario com este nome')
    } else {
        console.log('Nao existe usuario')
    }
}

module.exports = compareUserName;