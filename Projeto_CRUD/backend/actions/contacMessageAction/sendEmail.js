const mailer = require('./mailer')

function sendContactEmail(objectData){
    const {idUser, userName, objectMessage:{emailFrom, emailTo, message}} = objectData;

    // mailer.sendMail({
    //     from:emailFrom,
    //     to:emailTo,
    //     subject: `Contato interno - Projeto Biblioteca de ${userName}`,
    // })
}

module.exports = sendContactEmail;