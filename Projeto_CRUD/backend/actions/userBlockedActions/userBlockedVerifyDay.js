const { format, addBusinessDays } = require("date-fns");
const isDatePast = require("./isDatePast");

function userBlockedVerifyDay(blocked_days){
    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')

    const dateBlocked = format(addBusinessDays(today, blocked_days), 'dd-MM-yyyy')

    const isDatePastTest = isDatePast(todayFormat, dateBlocked)
    console.log(isDatePastTest)

    if (isDatePastTest) {
        //Se o dia de hoje for maior que o da multa , limpa os campos do banco de dados responsaveis por bloqueio e retorna true
    } else {
        //retorna false
    }
}

module.exports = userBlockedVerifyDay;