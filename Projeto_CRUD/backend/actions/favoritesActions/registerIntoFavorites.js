const knex = require("../../connection/connection");

async function registerIntoFavorites(favoriteDatas){

    const {userId, userName, idBook, bookName,author, category, resume, rating, image } = favoriteDatas

    try {
        const response = await knex('favorites').insert([{
            idUser: userId,
            userName: userName,
            idBook: idBook,
            bookName: bookName,
            author: author,
            resume: resume,
            category: category,
            rating: rating,
            image: image
        }])
    
        if (response != undefined) {
            const objectResponse = {
                isRegisterFavorite: true,
                message: 'Added to favorites'
            }
    
            return objectResponse;
        } else {
            const objectResponse = {
                isRegisterFavorite: false,
                message: 'Not added to favorites, contact the administrator'
            }
    
            return objectResponse;
        }
    } catch (error) {
        const objectResponse = {
            isRegisterFavorite: false,
            message: error
        }

        return objectResponse;
    }    

}

module.exports = registerIntoFavorites;