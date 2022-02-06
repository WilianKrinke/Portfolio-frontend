const mailer = require('./mailer')

async function sendEmail(objectResponse){  
    const {email, token, idUser} = objectResponse;
    const response = await mailer.sendMail({
        from: email,
        to: email,
        subject:'Teste de Recuperação de Senha - Library Project',
        html: `
            <h1>Recovery Link to Reset Password</h1>
            <p>To reset the password, access this link:
            <br> 
            <a href="http://localhost:3000/reset-pass/${token}/${idUser}">http://localhost:3000/reset-pass/${token}/${idUser}</a></p>
            <br>
            <p><b>Obs: </b>This link is only valid for 15 minutes, and for safety, only one try.</p>
        `
    })

    const {rejected} = response;

    if (rejected[0] === undefined) {
        return true
    } else {
        throw new Error('Server Error - sendContactEmail')
    }   
}

module.exports = sendEmail;