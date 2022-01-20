import { toast } from "react-toastify";

export default function tokenTimeOut(navigate){
    toast.warn('Token time expired, please re-login');
    setTimeout(() => {
    navigate('/');
    }, 3000);
}