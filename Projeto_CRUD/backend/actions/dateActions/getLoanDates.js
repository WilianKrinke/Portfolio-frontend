const datefns = require('date-fns');
const { ptBR } = require('date-fns/locale');

function getLoanDates(){
    const today = datefns.format(new Date(), 'yyyy-MM-dd', {locale: ptBR})
    const threeDaysBusinessAfter = datefns.format(datefns.addBusinessDays(new Date(), 1),'yyyy-MM-dd')
    //mudar posteriomente para tres dias uteis

    const objectDates = {
        today,
        threeDaysBusinessAfter
    }

    return objectDates;
}

module.exports = getLoanDates;