const knex = require('../../connection/connection')

async function getRatingBook(datas){
    const response = await knex('books').where({
        idBook: datas.idbook
    }).select('rating')

    const bookRating = parseFloat(response.map(item => item.rating)[0])
    return bookRating
}

module.exports = getRatingBook;