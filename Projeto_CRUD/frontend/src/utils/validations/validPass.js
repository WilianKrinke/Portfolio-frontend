import {objectSqlInjectionsWords} from './sqlInjections'

export function isValidPass(pass, passConfirmed){
    if (pass != passConfirmed) {
        const objectPass = {
            isValid: false,
            message: 'Passwords do not match'
        }

        return objectPass;
    }

    const sqlInjection = haveSqlInjection(pass)

    if (sqlInjection === true) {
        const objectPass = {
            isValid: false,
            message: 'Password has inappropriate characters'
        }

        return objectPass
    } else {
        const objectPass = {
            isValid: true,
            message: 'Valid pass'
        }

        return objectPass
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