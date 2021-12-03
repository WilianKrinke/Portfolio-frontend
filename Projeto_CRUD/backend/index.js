const express = require('express');
const crudRoute = require('./routes/crudRoute');
const registerUser = require('./routes/registerUser');
const cors =  require('cors');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config()



app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))


crudRoute(app)
registerUser(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})