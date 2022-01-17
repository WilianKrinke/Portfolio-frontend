const objectSqlInjectionsWords = require('./sqlInjection/sqlWords')

function sanitizationReqBody(req, res, next){
   const datasReqBody = req.body   
    const arrayValues = Object.values(datasReqBody)

    arrayValues.forEach(reqWord => {
        objectSqlInjectionsWords.forEach(sqlWord => {
            if (reqWord === sqlWord) {
                console.log('Entrou no if')
                res.status(400).send(null)
            }
        })
    });
    
    next();    
}

module.exports = sanitizationReqBody;