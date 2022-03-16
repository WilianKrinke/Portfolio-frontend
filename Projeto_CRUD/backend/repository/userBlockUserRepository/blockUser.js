const { addBusinessDays } = require("date-fns")
const knex = require("../../connection/connection")

async function blockUser(idUser){
    const today = new Date()
    const dateBlocked = addBusinessDays(today, 3);

    const response = await knex('nodecrud.users').where('idUser', idUser).update({isblock: 1, blocked_day: dateBlocked})

    if (response === 1) {
        return true
    } else {
        return false
    }
}

module.exports = blockUser