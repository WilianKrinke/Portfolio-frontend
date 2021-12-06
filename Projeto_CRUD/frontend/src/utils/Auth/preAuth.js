import baseUrl from "../baseUrl";

export default function preAuth(){
    const token = sessionStorage.getItem('token');
    baseUrl.defaults.headers.common['Authorization'] = JSON.parse(token);
}