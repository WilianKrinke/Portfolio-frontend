/* eslint-disable no-unused-vars */
import axios from 'axios';
import { doCrypt } from '../crypto/doCrypto';

export async function sendSignIn(datas){
    const cryptPass = doCrypt(datas.pass)

    const request = await axios.post('http://localhost:3001/login', {
        userName: datas.userName,
        pass: cryptPass
    })
}