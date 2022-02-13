const { format } = require("date-fns");
const getUserBlockDate = require("./getUserBlockDate");

async function returnDateCheck(idUser){
    const blockedDayFormat = await getUserBlockDate(idUser);

    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')

    console.log(todayFormat)
    console.log(blockedDayFormat)
    //comparar datas
}

module.exports = returnDateCheck;