export function isValidEmail(email){
    const patternEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const teste = email.match(patternEmail)

    if (teste == null) {
        const objectEmail = {isValid: false, message: 'E-mail is not valid'}
        return objectEmail
    } else {
        const objectEmail = {isValid: true, message: 'E-mail is valid'}
        return objectEmail
    }
}