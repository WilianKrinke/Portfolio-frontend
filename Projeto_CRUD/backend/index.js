require('dotenv').config()
const express = require('express');
const authValidate = require('./actions/authMiddleware');
const routeRegisterUser = require('./routes/registerUser');
const routeUserLogin = require('./routes/userLogin');
const routeLendAction = require('./routes/lendAction');
const routeGetBooks = require('./routes/getBooks')
const routeReturnBook = require('./routes/returnBook');
const routeAddFavorite = require('./routes/addFavorite');
const cors =  require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))


routeUserLogin(app)
routeRegisterUser(app)

app.use(authValidate)
routeGetBooks(app)
routeLendAction(app)
routeReturnBook(app)
routeAddFavorite(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})