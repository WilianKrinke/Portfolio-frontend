const mailer = require('./mailer')

async function sendContactEmail(objectData){
    const {userName, objectMessage:{emailFrom, emailTo, subject, message}} = objectData;

    const response = await mailer.sendMail({
        from:emailFrom,
        to:emailTo,
        subject: `${subject} - Through the internal channel`,
        html:`
            <h1>Message from user ${userName}</h1>
            <br/>
            <p>${message}</p>
        `
    })

    const {rejected} = response;

   if (rejected[0] === undefined) {
       return true
   } else {
       throw new Error('Server Error - sendContactEmail')
   }
}

module.exports = sendContactEmail;