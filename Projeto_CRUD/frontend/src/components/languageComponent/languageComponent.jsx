import React from 'react';
import { useDispatch } from 'react-redux';
import FlagBrazil from '../../assets/flags/flag-brazil.png';
import FlagSpain from '../../assets/flags/flag-spain.png';
import FlagUSA from '../../assets/flags/flag-usa.png';
import { locales } from '../../i18n/locales';
import { toggleLanguage } from '../../store/actions/actions';
import { DivLanguagesButtons } from './styled';

const Languagecomponent = () => {
    const dispatch = useDispatch();

    function handleLanguageToEnglish() {
        dispatch(toggleLanguage(locales.english));
    }

    function handleLanguageToSpanish() {
        dispatch(toggleLanguage(locales.spanish));
    }

    function handleLanguageToPortuguese() {
        dispatch(toggleLanguage(locales.portuguese));
    }

    return (
        <>
            <DivLanguagesButtons>
                <button className="button_flag" onClick={handleLanguageToEnglish}>
                    <img src={FlagUSA} alt="flag Usa" title="Flag USA" />
                </button>
                <button className="button_flag" onClick={handleLanguageToSpanish}>
                    <img src={FlagSpain} alt="flag spain" title="Flag Spain" />
                </button>
                <button className="button_flag" onClick={handleLanguageToPortuguese}>
                    <img src={FlagBrazil} alt="flag brazil" title="Flag Brazil" />
                </button>
            </DivLanguagesButtons>
        </>
    );
};

export default Languagecomponent;
