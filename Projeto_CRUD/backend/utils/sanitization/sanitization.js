async function sanitizationReqBody(req, res, next){
   const datasReqBody = req.body   
    const arrayValues = Object.values(datasReqBody)

    arrayValues.forEach(element => {
        if (element === 'SQLINJECTION') {
                res.status(400).send(false)
        }
    });
    
    
}

module.exports = sanitizationReqBody;