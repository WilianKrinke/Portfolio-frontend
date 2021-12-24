const compareUserName = require("./compareUserName");

function getEmailFromUser(userName){
    compareUserName(userName)
}

module.exports = getEmailFromUser;