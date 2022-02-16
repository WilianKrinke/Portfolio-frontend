import Cookies from 'js-cookie';
import { locales } from '../../i18n/locales';

const cookieDarkOrLight = (Cookies.get('dark') === 'true')
const cookieLanguage = Cookies.get('languageObject')

const initialStates = {
    darkMode: cookieDarkOrLight || false,
    languageObject: cookieLanguage || locales.english 

}

export default initialStates;
