require('dotenv').config()
const express = require('express');
const authValidate = require('./actions/authMiddleware');
const routeSignUpUser = require('./routes/signUpUser');
const routeUserLogin = require('./routes/userLogin');
const routeLendBook = require('./routes/lendBook');
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
routeSignUpUser(app)

app.use(authValidate)
routeGetBooks(app)
routeLendBook(app)
routeReturnBook(app)
routeAddFavorite(app)

app.listen(process.env.EXPRESS_PORT, () => {
    console.log('Server On-Line')
})