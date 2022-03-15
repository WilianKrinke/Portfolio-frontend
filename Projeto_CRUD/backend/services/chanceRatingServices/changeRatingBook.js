const averageRating = require("./averageRating");
const getRatingBook = require("../../repository/ratingRepository/getRatingBook");
const insertRatingDb = require("../../repository/ratingRepository/insertRatingDb");

async function changeRatingBook(datas){
    const bookRating = await getRatingBook(datas)
    const requestRating = datas.rating; 
    const avarage = averageRating(bookRating, requestRating)
    const response = await insertRatingDb(avarage, datas.idBook);
    return response;
}

module.exports = changeRatingBook;