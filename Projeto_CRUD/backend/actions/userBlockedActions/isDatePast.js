function isDatePast(today, returnBookDateArray){ 
    
    if (returnBookDateArray.length === 0) {
        return false
    }
    
    const [dia, mes, ano] = today.split('-')
    
    returnBookDateArray.forEach(item => {
        const [diaRetorno, mesRetorno, anoRetorno] = item.split('-')
        
        
        if (ano > anoRetorno) {
            return true
        } else if(ano == anoRetorno && mes > mesRetorno){
            return true
        } else if(ano == anoRetorno && mes == mesRetorno && dia > diaRetorno){
            return true
        } else {
            console.log('Aqui', 'Linha 20')
            return false
        }
    });
    
}

module.exports = isDatePast;