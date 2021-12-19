const averageRating = require("./averageRating");
const getRatingBook = require("./getRatingBook");
const insertRatingDb = require("./insertRatingDb");

async function changeRatingBook(datas){
    const bookRating = await getRatingBook(datas)
    const requestRating = datas.rating;

    const avarage = averageRating(bookRating, requestRating)
    const response = await insertRatingDb(avarage, datas.idbook);

    return response;
}

module.exports = changeRatingBook;