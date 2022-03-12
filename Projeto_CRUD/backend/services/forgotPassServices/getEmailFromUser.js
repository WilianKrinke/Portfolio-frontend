const compareUserName = require("./compareUserName");

async function getEmailFromUser(userName){
    const response = await compareUserName(userName)
    return response;
}

module.exports = getEmailFromUser;