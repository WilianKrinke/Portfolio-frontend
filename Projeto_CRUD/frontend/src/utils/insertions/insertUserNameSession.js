export default function insertUserNameSession(userDatas){
    sessionStorage.setItem('userName', JSON.stringify(userDatas.userName));
    sessionStorage.setItem('idUser', JSON.stringify(userDatas.idUser));
}