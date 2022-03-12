function averageRating(bookRating, requestRating){
    const requestRatingNumber = parseFloat(requestRating)

    const avarage = Math.ceil((bookRating + requestRatingNumber) / 2);
    return avarage;
}

module.exports = averageRating;