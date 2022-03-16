const { differenceInBusinessDays } = require("date-fns");
const knex = require("../../connection/connection");

async function daysToUnlock(idUser){
    const response = await knex('nodecrud.users').where('idUser', idUser).select('blocked_day')

    const {blocked_day} = response[0]
    const today = new Date()

    const daysLeftUnlock = Math.abs(differenceInBusinessDays(today, blocked_day))

   return daysLeftUnlock
}
module.exports = daysToUnlock;