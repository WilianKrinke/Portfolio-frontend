const knex = require('../../connection/connection')

async function checkSameUserName(userName){
   const response = await knex.column('userName').select().from('users')
   let control = false;

   response.forEach(element => {
       if (element.userName === userName.toLowerCase()) {
            control = true
       }
   });

   return control;
}

module.exports = checkSameUserName;