function changePass(app){
    app.route('/change-pass')
        .post(async(req, res) => {
            console.log(req.body)
            //inserir no banco
        })
}

module.exports = changePass;