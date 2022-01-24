const knex = require("../../connection/connection");
const decrementCopies = require("../copiesActions/decrementCopies");
const getLoanDates = require("../dateActions/getLoanDates");

async function insertLendBookInDb(bookDatas){    
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

        const responseDecrementCopies = await decrementCopies(idBook)

        if (insertion[0] !== null || undefined && responseDecrementCopies === true) {
            const response = {
                isRegister: true,
                message: 'User borrowed book'
            }
            return response;

        } else {
            throw new Error('Server Error - insertLendBookInDb')
        }  
}

module.exports = insertLendBookInDb;