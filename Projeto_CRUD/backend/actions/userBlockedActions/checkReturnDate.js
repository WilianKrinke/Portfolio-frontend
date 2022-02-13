function checkReturnDate(today, returnBookDateArray){ 
    if (returnBookDateArray.length === 0) {
        return false
    }
    
    const [dia, mes, ano] = today.split('-')
    let control;
    
    returnBookDateArray.forEach(item => {
        const [diaRetorno, mesRetorno, anoRetorno] = item.split('-')

        if (ano > anoRetorno) {
            control = true
        } else if(ano == anoRetorno && mes > mesRetorno){
            control = true
        } else if(ano == anoRetorno && mes == mesRetorno && dia > diaRetorno){
            control = true
        } else {
            control = false
        }
    });

    return control;    
}

module.exports = checkReturnDate;