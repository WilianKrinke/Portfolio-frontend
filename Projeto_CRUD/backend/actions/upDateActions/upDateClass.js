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

   async upDateFirstName(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            primeiro_nome: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
   }

   async upDateSecondName(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            segundo_nome: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateBirth(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            segundo_nome: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateAdressStreet(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            endereco_logradouro: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateAdressNeighborhood(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            endereco_bairro: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateAdressNumber(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            endereco_numero: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateCityAdress(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            endereco_cidade: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateEmail(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            email: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateCellPhone(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            telefone_celular: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }

    async upDateLandLine(data){
        const response = await knex('users').where('idUser', this.idUser).update({
            telefone_fixo: data
        })

        if (response === 1) {
            return true
        } else {
            throw new Error('Server Error - class upDateClass - upDateUserName')
        }
    }
}

module.exports = upDateClass;