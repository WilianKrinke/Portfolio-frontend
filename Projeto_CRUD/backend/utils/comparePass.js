const bcrypt = require('bcryptjs')

function comparePass(passToLogin, passReceivedDb) {
    const match = bcrypt.compareSync(passToLogin,passReceivedDb)
    console.log(match)
}

module.exports = comparePass;