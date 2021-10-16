const express = require('express');
const bodyParser = require('body-parser')
const crudRoute = require('./routes/crudRoute');
const app = express();

app.use(bodyParser({extended: true}))

crudRoute(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})