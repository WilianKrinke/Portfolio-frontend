const objectSqlInjectionsWords = require("../sqlInjection/sqlWords");

function isValidWords(wordsArray){
    wordsArray.forEach(element => {
        objectSqlInjectionsWords.forEach(sqlWord => {
            if (element === sqlWord) {
                return false
            }
        })
    });

    return true;
}

module.exports = isValidWords