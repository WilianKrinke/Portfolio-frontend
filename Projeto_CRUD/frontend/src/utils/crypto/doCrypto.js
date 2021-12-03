/* eslint-disable no-unused-vars */
import bcrypt from 'bcryptjs'
import { SALT } from './env.js'

export function doCrypt(pass){

    const salt =  bcrypt.genSaltSync(SALT);
    const hashPassword =  bcrypt.hashSync(pass, salt);

    
    return hashPassword;
   
}