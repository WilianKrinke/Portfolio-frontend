const { format } = require("date-fns");
const knex = require("../../connection/connection");

async function getUserBlockDate(idUser){
    const response = await knex('nodecrud.users').where('idUser', idUser).select('blocked_day')

    const {blocked_day} = response[0]    
    const blocked_dayFormat = format(blocked_day, 'dd-MM-yyyy')

    return blocked_dayFormat
}

module.exports = getUserBlockDate;