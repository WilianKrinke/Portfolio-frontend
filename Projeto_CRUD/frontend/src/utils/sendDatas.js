import axios from 'axios';

export async function sendDatas(datas) {
    await axios.post('http://localhost:3001/sign-in', datas,{
        "Content-Type": "application/json"
      })
}