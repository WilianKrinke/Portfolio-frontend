const knex = require('../../connection/connection')

async function getDatas(idUser){
    const response = await knex('users').select('email', 'data_nascimento','endereco_logradouro', 'endereco_numero', 'endereco_bairro', 'endereco_cidade', 'telefone_fixo', 'telefone_celular', 'primeiro_nome', 'segundo_nome', 'userName').where('idUser', idUser);
   
    return response
    
}

module.exports = getDatas;