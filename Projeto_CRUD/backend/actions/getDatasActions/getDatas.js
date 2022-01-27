const knex = require('../../connection/connection')

async function getDatas(idUser){
    const response = await knex('users').select('email', 'idade','endereco_logradouro', 'endereco_numero', 'endereco_bairro', 'endereco_cidade', 'telefone_fixo', 'telefone_celular', 'primeiro_nome', 'segundo_nome', 'userName', 'last_update').where('idUser', idUser);
    
    if(response[0] === undefined){
        throw new Error('Server Error - getDatas')
    } else {
        return response; 
    }
}

module.exports = getDatas;