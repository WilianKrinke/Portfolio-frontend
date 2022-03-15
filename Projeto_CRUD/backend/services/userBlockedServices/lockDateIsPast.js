const { format } = require("date-fns");
const compareDatesToUnlock = require("./compareDatesToUnlock");
const getUserBlockDate = require("../../repository/userBlockUserRepository/getUserBlockDate");

async function lockDateIsPast(idUser){
    const blockedDayFormat = await getUserBlockDate(idUser);

    const today = new Date()
    const todayFormat = format(today, 'dd-MM-yyyy')

    const lockDateIsPastTest = compareDatesToUnlock(todayFormat,blockedDayFormat)
    return lockDateIsPastTest;
}

module.exports = lockDateIsPast;