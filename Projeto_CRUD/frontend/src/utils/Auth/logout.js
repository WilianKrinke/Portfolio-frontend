import baseUrl from '../baseUrl';

export default function logout(navigate){    
    baseUrl.defaults.headers.common['Authorization'] = undefined;
    sessionStorage.clear()
    navigate('/');
}