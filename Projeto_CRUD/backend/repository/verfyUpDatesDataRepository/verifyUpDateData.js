const knex = require('../../connection/connection')

async function verifyUpDateData(idUser){
    const response = await knex('nodecrud.users').where('idUser', idUser).select('email','idade','endereco_logradouro','endereco_numero','endereco_bairro','endereco_cidade', 'telefone_fixo', 'telefone_celular', 'primeiro_nome','segundo_nome')

    let control = true

    const objectDatas = response[0];
    const arrayValues = Object.values(objectDatas)

    arrayValues.forEach(element => {
        if (element === null) {
            control = false
        }
    });

    return control
}

module.exports = verifyUpDateData;