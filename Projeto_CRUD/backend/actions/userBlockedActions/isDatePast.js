function isDatePast(today, dateBlocked){    
    const [dia, mes, ano] = today.split('-')
    const [diaBloqueado, mesBloqueado, anoBloqueado] = dateBlocked.split('-')

    if (ano > anoBloqueado) {
        return true
    } else if(ano === anoBloqueado && mes > mesBloqueado){
        return true
    } else if (ano === anoBloqueado && mes === mesBloqueado && dia > diaBloqueado){
        return true
    } else {
        return false
    }
}

module.exports = isDatePast;