const express = require('express');
const crudRoute = require('./routes/crudRoute');
const registerUser = require('./routes/registerUser');
const userLogin = require('./routes/userLogin');
const cors =  require('cors');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()

console.log(process.env.CLIENT)

app.use(session({
    secret:
}))
app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))


crudRoute(app)
registerUser(app)
userLogin(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})