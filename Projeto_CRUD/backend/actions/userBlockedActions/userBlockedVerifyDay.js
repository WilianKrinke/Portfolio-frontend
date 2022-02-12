const { format, addBusinessDays } = require("date-fns");
const getBookReturnDate = require("./getBookReturnDate");
const isDatePast = require("./isDatePast");

async function userBlockedVerifyDay(idUser){
    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')

    const returnBookDateArray = await getBookReturnDate(idUser)
    
    const isDatePastTest = isDatePast(todayFormat, returnBookDateArray)
    console.log(isDatePastTest)

    if (isDatePastTest) {
        //Se o dia de hoje for maior que os dias de retorno do livro , aplicar bloqueio
         
    } else {
        //retorna false
    }
}

module.exports = userBlockedVerifyDay;