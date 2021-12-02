/* eslint-disable no-unused-vars */
import {objectSqlInjectionsWords} from './sqlInjections'

export function isValidUser(userName){
    const arrUserName = userName.split(" ");

    const haveNumbers = haveNumbers(arrUserName)
    const haveSqlInjection = haveSqlInjection(arrUserName)

    if (haveNumbers === true || haveSqlInjection === true) {
        return false
    } else {
        return true
    } 
}


function haveSqlInjection(names){
    let control = false;

    names.forEach(element => {        
        for (let i = 0; i < objectSqlInjectionsWords.length; i++) {
            if (element === objectSqlInjectionsWords[i].toLocaleLowerCase()) {
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