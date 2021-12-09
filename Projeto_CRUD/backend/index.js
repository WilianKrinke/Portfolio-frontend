const express = require('express');
const usersRoute = require('./routes/usersRoute');
const registerUser = require('./routes/registerUser');
const userLogin = require('./routes/userLogin');
const cors =  require('cors');
const authValidate = require('./utils/authMiddleware');
const getBooks = require('./routes/getBooks');
const lendAction = require('./routes/lendAction');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

registerUser(app)
userLogin(app)
lendAction(app)

app.use(authValidate)
getBooks(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})