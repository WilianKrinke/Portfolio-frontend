
export default function insertSessionToken(token){
    sessionStorage.setItem('token', JSON.stringify(token));
}