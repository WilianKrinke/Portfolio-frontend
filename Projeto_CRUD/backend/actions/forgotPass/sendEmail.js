const mailer = require('../../modules/mailer')

function sendEmail(objectResponse){
    const {email, token, idUser} = objectResponse;

    try {
        mailer.sendMail({
            from: email,
            to: email,
            subject:'Teste de Recuperação de Senha -  Library Project',
            html: `
                <p>To reset the password, access this link: <a href="http://localhost:3000/reset-pass/${token}/${idUser}">http://localhost:3000/reset-pass/${token}/${idUser}</a></p>
            `
        })

        return true
        
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = sendEmail;