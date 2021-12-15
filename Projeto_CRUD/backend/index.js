require('dotenv').config()
const express = require('express');
const authValidate = require('./utils/authMiddleware');
const registerUser = require('./routes/registerUser');
const userLogin = require('./routes/userLogin');
const lendAction = require('./routes/lendAction');
const getBooks = require('./routes/getBooks')
const returnBook = require('./routes/returnBook');
const addFavorite = require('./routes/addFavorite');
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
addFavorite(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})