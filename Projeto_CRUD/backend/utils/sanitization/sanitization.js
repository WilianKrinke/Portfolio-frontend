async function sanitization(req, res, next){
    console.log(req.body)
    next()
}

module.exports = sanitization;