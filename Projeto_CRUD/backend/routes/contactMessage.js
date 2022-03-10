const contactUsMessageController = require("../controllers/contactUsMessage.controller")

function contactMessage(app){
    app.route('/contact-message')
        .post(contactUsMessageController)
}

module.exports = contactMessage