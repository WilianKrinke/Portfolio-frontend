const changeRatingBook = require("../services/chanceRatingServices/changeRatingBook");

async function changeBookRatingController(req, res, next) {
    try {                
        const response = await changeRatingBook(req.body);                 
        res.send(response)                
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}

module.exports = changeBookRatingController;