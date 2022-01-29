function contactMessage(app){
    app.route('/contact-message')
        .post(async(req, res)=>{
            console.log(req.body)

            const [idUser] = req.idUser     
            const [userName] = req.userName
        })
}

module.exports = contactMessage