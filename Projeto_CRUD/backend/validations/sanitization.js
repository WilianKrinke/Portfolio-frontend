const objectSqlInjectionsWords = require('./sqlInjection/sqlWords')

function sanitizationReqBody(req, res, next){
    try {
        const datasReqBody = req.body   
        const arrayValues = Object.values(datasReqBody)
    
        arrayValues.forEach(reqWord => {
            objectSqlInjectionsWords.forEach(sqlWord => {
                if (reqWord === sqlWord) {
                    console.log('SQL INJECTION')
                    throw new Error('SQL INJECTION')
                }
            })
        });

        next();        
    } catch (error) {
        res.ststus(401).send(error.message)
    }      
}

module.exports = sanitizationReqBody;