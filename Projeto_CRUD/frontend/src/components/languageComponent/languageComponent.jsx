import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlagBrazil from '../../assets/flags/flag-brazil.png';
import FlagSpain from '../../assets/flags/flag-spain.png';
import FlagUSA from '../../assets/flags/flag-usa.jpg';
import { locales } from '../../i18n/locales';
import translate from '../../i18n/translate';
import { toggleLanguage } from '../../store/actions/actions';
import { DivLanguagesButtons, P } from './styled';

const Languagecomponent = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

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
                <div className="div_paragraph">
                    <P $darkmode={darkMode}>{translate('languagessetup')}:</P>
                </div>
                <div className="div_flags">
                    <button className="button_flag" onClick={handleLanguageToEnglish}>
                        <img src={FlagUSA} alt="flag Usa" title="Flag USA" height={15} width={25} />
                    </button>
                    <button className="button_flag" onClick={handleLanguageToSpanish}>
                        <img src={FlagSpain} alt="flag spain" title="Flag Spain" height={15} width={25} />
                    </button>
                    <button className="button_flag" onClick={handleLanguageToPortuguese}>
                        <img src={FlagBrazil} alt="flag brazil" title="Flag Brazil" height={15} width={25} />
                    </button>
                </div>
            </DivLanguagesButtons>
        </>
    );
};

export default Languagecomponent;
