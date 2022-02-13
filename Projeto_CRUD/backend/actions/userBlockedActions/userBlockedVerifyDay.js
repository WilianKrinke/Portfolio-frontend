const { format } = require("date-fns");
const blockUser = require("./blockUser");
const getBookReturnDate = require("./getBookReturnDate");
const isDatePast = require("./isDatePast");

async function userBlockedVerifyDay(idUser){
    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')
    const returnBookDateArray = await getBookReturnDate(idUser)    
    
    const isDatePastTest = isDatePast(todayFormat, returnBookDateArray)    
    
    if (isDatePastTest) {
        blockUser(idUser)         
    }
}

module.exports = userBlockedVerifyDay;