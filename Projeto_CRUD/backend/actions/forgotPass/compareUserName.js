const knex = require("../../connection/connection");

async function compareUserName(userName){
    const response = await knex('users').select('email').where('userName',userName)

    console.log(response[0])
}

module.exports = compareUserName;