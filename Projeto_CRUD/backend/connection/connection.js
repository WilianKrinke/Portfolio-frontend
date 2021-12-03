
const knex = require('knex')({
  client: process.env.CLIENT,
  connection: {
    host : process.env.HOST,
    port : process.env.PORT,
    user : process.env.USER,
    password : process.env.PASS,
    database : process.env.DATABASE
  }
});
          
module.exports = knex;