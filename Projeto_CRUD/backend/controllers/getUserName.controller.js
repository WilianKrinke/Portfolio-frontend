async function getUserNameController(req, res, next) {
    try {
        res.status(200).send({userName: req.userName})
    } catch (error) {
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = getUserNameController;