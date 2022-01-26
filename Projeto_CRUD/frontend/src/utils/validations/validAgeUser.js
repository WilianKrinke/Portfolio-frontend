import { objectSqlInjectionsWords } from "./sqlInjections";

export default function validAgeUser(age){
    const sqlInjection = haveSqlInjection(age)
    
    if (sqlInjection === true) {       
        const objectUserName = {isValid: false, message: 'Age contains inappropriate characters'}
        return objectUserName;
    } else {
        const objectUserName = {isValid: true, message: 'Valid Age'}
        return objectUserName;
    } 
}

function haveSqlInjection(age){
    let control = false;    
             
    objectSqlInjectionsWords.forEach(sqlWord => {
        if (age === sqlWord) {
            control = true
        }
    })    

    return control;
}