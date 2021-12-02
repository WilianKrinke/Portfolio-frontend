import {objectSqlInjectionsWords} from './sqlInjections'

export function isValidPass(pass, passConfirmed){
    if (pass != passConfirmed) {
        const arrayPass = [false, 'As Senhas não são iguais']
        return arrayPass;
    }

    const sqlInjection = haveSqlInjection(pass)

    if (sqlInjection === true) {
        const arrayPass = [false, 'Senha possui caracteres impróprios']
        return arrayPass
    } else {
        const arrayPass = [true, 'Dados válidos']
        return arrayPass
    }
}


function haveSqlInjection(pass){
    let control = false;
  
    for (let i = 0; i < objectSqlInjectionsWords.length; i++) {
        if (pass === objectSqlInjectionsWords[i]) {
            control = true;
            break;
        }            
    }
   
    return control;
}