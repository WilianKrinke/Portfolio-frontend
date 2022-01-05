/* eslint-disable no-unused-vars */
import {objectSqlInjectionsWords} from './sqlInjections'

export function isValidUser(userName){
    const arrUserName = userName.split(" ");

    const haveNumbersInUserName = haveNumbers(arrUserName)
    const sqlInjection = haveSqlInjection(arrUserName)

    if (haveNumbersInUserName === true || sqlInjection === true) {
        const objectUserName = {isValid: false, message: 'Username contains inappropriate characters'}
        return objectUserName;
    } else {
        const objectUserName = {isValid: true, message: 'Valid Username'}
        return objectUserName;
    } 
}

function haveSqlInjection(names){
    let control = false;
    names.forEach(userNameWord => {
        objectSqlInjectionsWords.forEach(sqlInjectionWord => {            
            if (userNameWord === sqlInjectionWord) {
                control = true;
            }
        })
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