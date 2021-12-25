const compareUserName = require("./compareUserName");

async function getEmailFromUser(userName){
    const response = await compareUserName(userName)
    
    //Fazer lógica para enviar email de recuperação de senha
}

module.exports = getEmailFromUser;