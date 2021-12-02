/* eslint-disable no-unused-vars */
import {objectSqlInjectionsWords} from './sqlInjections'

export function isValidUser(userName){
    const arrUserName = userName.split(" ");

    const Numbers = haveNumbers(arrUserName)
    const SqlInjection = haveSqlInjection(arrUserName)

    if (Numbers === true || SqlInjection === true) {
        const dataUserName = [false, 'Contém Caracteres Impróprios']
        return dataUserName;
    } else {
        const dataUserName = [true, 'Dados Válidos']
        return dataUserName
    } 
}


function haveSqlInjection(names){
    let control = false;

    names.forEach(element => {        
        for (let i = 0; i < objectSqlInjectionsWords.length; i++) {
            if (element === objectSqlInjectionsWords[i]) {
                control = true;
                break;
            }            
        }
    })

    return control;
}


function haveNumbers(names){
    const isPatternUserName = /^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/g;
    let control = false;

    names.forEach(element => {        
        const haveNumber = element.match(isPatternUserName)
        if (haveNumber) {
            control = true
        }     
    });

    return control;
}