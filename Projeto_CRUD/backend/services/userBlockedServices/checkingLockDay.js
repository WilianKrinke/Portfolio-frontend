const { format } = require("date-fns");
const blockUser = require("../../repository/userBlockUserRepository/blockUser");
const getBookReturnDate = require("../../repository/userBlockUserRepository/getBookReturnDate");
const checkReturnDate = require("./checkReturnDate");

async function checkingLockDay(idUser){
    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')
    const returnBookDateArray = await getBookReturnDate(idUser)    
    
    const isDatePastTest = checkReturnDate(todayFormat, returnBookDateArray)

    if (isDatePastTest) {
        blockUser(idUser)         
    }
}

module.exports = checkingLockDay;