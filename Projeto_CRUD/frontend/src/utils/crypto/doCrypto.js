/* eslint-disable no-undef */
import bcrypt from 'bcryptjs';

export function doCrypt(pass){
    const secret = parseInt(process.env.REACT_APP_SECRET) 

    const salt =  bcrypt.genSaltSync(secret);
    const hashPassword =  bcrypt.hashSync(pass, salt);

    return hashPassword;   
}