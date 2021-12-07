
export default function insertSessionDatas(token){
    sessionStorage.setItem('token', JSON.stringify(token));
}