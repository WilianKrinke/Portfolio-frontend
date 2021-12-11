const knex = require("../connection/connection");
const getLoanDates = require("./dateActions/getLendDates");

async function insertLendBookInDb(bookDatas){
    try {
        const {idBook,bookName,userId,userName} = bookDatas;
        const lendDates = getLoanDates()        

        const insertion = await knex('nodecrud.lendregister').insert({
            idUser: userId,
            userName: userName,
            idBook: idBook,
            bookName: bookName,
            lendDate: lendDates.today,
            devolutionDate: lendDates.threeDaysBusinessAfter
        })

        if (insertion != null) {
            const response = {
                isRegister: 1,
                message: 'User lent the book'
            }

            return response;
        } else {
            const response = {
                isRegister: 0,
                message: 'Opps, something wrong, contact the administrator.'
            }

            return response;
        }       

    } catch (error) {
        console.log(error)
    }
}

module.exports = insertLendBookInDb;