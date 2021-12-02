export function isValidEmail(email){
    const patternEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const teste = email.match(patternEmail)

    if (teste == null) {
        const arrayEmailValid = [false, 'E-mail não está válido']
        return arrayEmailValid
    } else {
        const arrayEmailValid = [true, 'Dados válidos']
        return arrayEmailValid
    }
}