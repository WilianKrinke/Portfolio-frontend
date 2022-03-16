const bcrypt = require('bcryptjs')

async function decripPassDb(pass, hashDb) {
    const test = bcrypt.compareSync(pass, hashDb)
   return test
}

module.exports = decripPassDb;