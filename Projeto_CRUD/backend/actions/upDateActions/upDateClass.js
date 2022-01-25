const knex = require('../../connection/connection')

class upDateClass{
    constructor(idUser){
        this.idUser = idUser
    }

   async upDateUserName(data){        
        const response = await knex('users').where('idUser', this.idUser).update({
            userName: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
   }

   upDateFirstName(data){

   }

   upDateSecondName(data){

    }

    upDateBirth(data){

    }

    upDateAdressStreet(data){

    }

    upDateAdressNeighborhood(data){

    }

    upDateAdressNumber(data){

    }

    upDateCityAdress(data){

    }

    upDateEmail(data){

    }

    upDateCellPhone(data){

    }

    upDateLandLine(data){

    }

}

module.exports = upDateClass;