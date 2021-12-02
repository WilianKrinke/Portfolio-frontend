import axios from 'axios';

export async function sendDatas(datas) {
    try {
        const request = await axios.post('http://localhost:3001/sign-in', datas);
        return request.data;        
    } catch (error) {
        return error;
    }
}