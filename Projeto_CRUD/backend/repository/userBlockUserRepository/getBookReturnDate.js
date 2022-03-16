const knex = require("../../connection/connection")
const { format } = require("date-fns");

async function getBookReturnDate(idUser){
    const response = await knex('nodecrud.lendregister').where('idUser', idUser).select('devolutionDate')

    let arrayDevolutionDateFormat = []    

    if (response.length !== 0) {
        response.forEach(item => {
            const devolutionDateFormat = format(new Date(item.devolutionDate), 'dd-MM-yyyy')
            arrayDevolutionDateFormat.push(devolutionDateFormat)
        });
    }

    return arrayDevolutionDateFormat;
}

module.exports = getBookReturnDate