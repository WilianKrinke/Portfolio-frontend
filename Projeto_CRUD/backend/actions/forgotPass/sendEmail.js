const mailer = require('../../modules/mailer')
const path = require('path')

function sendEmail(userDatas, token){

    const {email, idUser} = userDatas

    mailer.sendMail({
        to: email,
        from: 'krinkewilian@gmail.com',//algum email comporativo,
        template: path.resolve('./src/resources/mail/email'),
        context: { token, idUser  }
    })
}

module.exports = sendEmail;