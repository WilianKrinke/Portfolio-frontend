const knex = require("../../connection/connection");


async function checkSameUserName(userName){
   let control = false;
   const response = await knex.column('userName').select().from('nodecrud.users')
   
   response.forEach(element => {
       if (element.userName === userName.toLowerCase()) {
            control = true
       }
   });

   return control;
}

module.exports = checkSameUserName;