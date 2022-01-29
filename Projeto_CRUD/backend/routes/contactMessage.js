function contactMessage(app){
    app.route('/contact-message')
        .post(async(req, res)=>{
            const {objectMessage} = req.body
            const [idUser] = req.idUser     
            const [userName] = req.userName

            console.log(objectMessage)


        })
}

module.exports = contactMessage