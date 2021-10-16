const express = require('express');
const crudRoute = require('./routes/crudRoute');
const app = express();


crudRoute(app)

app.listen(3001, () => {
    console.log('Listening to 3001')
})