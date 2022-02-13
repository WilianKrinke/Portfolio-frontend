const { format } = require("date-fns");
const compareDatesToUnlock = require("./compareDatesToUnlock");
const getUserBlockDate = require("./getUserBlockDate");

async function dateIsPassed(idUser){
    const blockedDayFormat = await getUserBlockDate(idUser);

    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')

    const dateIsPassedTest = compareDatesToUnlock(todayFormat,blockedDayFormat)
    return dateIsPassedTest;
}

module.exports = dateIsPassed;