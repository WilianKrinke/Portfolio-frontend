const knex = require("../../connection/connection");
const getLoanDates = require("../dateActions/getLoanDates");

async function insertLendBookInDb(bookDatas){
    try {
        const {idBook,bookName,userId,userName, category, author, resume, image, rating} = bookDatas;
        const lendDates = getLoanDates()        

        const insertion = await knex('nodecrud.lendregister').insert({
            idUser: userId,
            userName: userName,
            idBook: idBook,
            bookName: bookName,
            lendDate: lendDates.today,
            devolutionDate: lendDates.threeDaysBusinessAfter,
            category: category,
            author: author,
            resume: resume,
            image: image,
            rating: rating
        })

        if (insertion[0] !== null || undefined) {
            const response = {
                isRegister: true,
                message: 'User borrowed book'
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