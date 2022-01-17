const knex = require('../../connection/connection')

async function getRatingBook(datas){
    const {idBook} = datas
    const response = await knex('books').where('idBook', idBook).select('rating')

    if (response[0] === undefined) {
       return null
    } else {
        const bookRating = parseFloat(response.map(item => item.rating)[0])
        return bookRating
    }

}

module.exports = getRatingBook;