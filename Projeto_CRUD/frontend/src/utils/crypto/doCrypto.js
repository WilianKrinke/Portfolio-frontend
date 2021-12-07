/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import bcrypt from 'bcryptjs'

export function doCrypt(pass){
    const secret = parseInt(process.env.REACT_APP_SECRET) 

    const salt =  bcrypt.genSaltSync(secret);
    const hashPassword =  bcrypt.hashSync(pass, salt);

    return hashPassword;   
}