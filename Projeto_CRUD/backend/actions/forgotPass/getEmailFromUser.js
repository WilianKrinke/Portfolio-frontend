const compareUserName = require("./compareUserName");

async function getEmailFromUser(userName){
    const {email} = await compareUserName(userName)
    console.log(email)
    //Fazer lógica para enviar email de recuperação de senha
}

module.exports = getEmailFromUser;