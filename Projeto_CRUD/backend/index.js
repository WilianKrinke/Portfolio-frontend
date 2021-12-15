require('dotenv').config()
const express = require('express');
const registerUser = require('./routes/registerUser');
const userLogin = require('./routes/userLogin');
const authValidate = require('./utils/authMiddleware');
const lendAction = require('./routes/lendAction');
const getBooks = require('./routes/getBooks')
const returnBook = require('./routes/returnBook');
const cors =  require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

registerUser(app)
userLogin(app)

app.use(authValidate)
getBooks(app)
lendAction(app)
returnBook(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})