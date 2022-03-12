async function compareDatesToUnlock(todayFormat,blockedDayFormat){

    const [dia, mes, ano] = todayFormat.split('-')
    const [diaBloqueio, mesBloqueio, anoBloqueio] = blockedDayFormat.split('-')

    if (ano > anoBloqueio) {
        return true
    } else if(ano === anoBloqueio && mes > mesBloqueio){
        return true
    } else if(ano === anoBloqueio && mes === mesBloqueio && dia > diaBloqueio){
        return true
    } else{
        return false
    }
}

module.exports = compareDatesToUnlock;