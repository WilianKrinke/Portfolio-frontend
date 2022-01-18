const objectSqlInjectionsWords = require('./sqlInjection/sqlWords')

function sanitizationReqBody(req, res, next){
    const datasReqBody = req.body   
    const arrayValues = Object.values(datasReqBody)

    arrayValues.forEach(reqWord => {
        objectSqlInjectionsWords.forEach(sqlWord => {
            if (reqWord === sqlWord) {
                console.log('SQL INJECTION')
                res.status(400).send(null)
            }
        })
    });
    
    next();    
}

module.exports = sanitizationReqBody;