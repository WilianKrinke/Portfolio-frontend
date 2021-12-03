/* eslint-disable no-unused-vars */
import bcrypt from 'bcryptjs'
import { SALT } from './env.js'

export function doCrypt(pass){
    console.log('encriptando...')
    const hash = bcrypt.hashSync(pass, SALT);
    console.log('encriptado')
    return hash;   
}