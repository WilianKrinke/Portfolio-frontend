const userAccess = require("../actions/userAccessActions/userAccess");

function userAccessData(app){
    app.route('/access-user')
        .get(async(req,res) => {
            try {
                const [idUser] =  req.idUser
                const [userName] = req.userName    

                const {email} = await userAccess(idUser)

                const objectResponse = {
                    userName,
                    email
                }

                res.status(200).send(objectResponse)   
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = userAccessData;