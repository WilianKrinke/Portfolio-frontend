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
                isRegister: true,
                message: 'User lent the book'
            }
            return response;

        } else {

            const response = {
                isRegister: false,
                message: 'Opps, something wrong, contact the administrator.'
            }
            return response;
        }       

    } catch (error) {
        const response = {
            isRegister: false,
            message: error
        }
            return response;
    }
}

module.exports = insertLendBookInDb;