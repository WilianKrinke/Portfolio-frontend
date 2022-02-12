const knex = require('../../connection/connection')

async function userPenaltyAction(idUser){
    const response = await knex('users').where('idUser', idUser).update({
        isblock: 1,
        blocked_days: 3
    })

    if (response !== 1) {
        return false
    } else {
        return true
    }
}

module.exports = userPenaltyAction