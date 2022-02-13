const { format } = require("date-fns");
const blockUser = require("./blockUser");
const getBookReturnDate = require("./getBookReturnDate");
const checkReturnDate = require("./checkReturnDate");

async function checkingLockDay(idUser){
    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')
    const returnBookDateArray = await getBookReturnDate(idUser)    
    
    //const isDatePastTest = checkReturnDate(todayFormat, returnBookDateArray)
    const isDatePastTest = true
    console.log(isDatePastTest)

    if (isDatePastTest) {
        console.log('Entrou No if')
        blockUser(idUser)         
    }
}

module.exports = checkingLockDay;