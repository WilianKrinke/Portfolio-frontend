import React from 'react';
import { useDispatch } from 'react-redux';
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
                <button onClick={handleLanguageToEnglish}>English</button>
                <button onClick={handleLanguageToSpanish}>Spanish</button>
                <button onClick={handleLanguageToPortuguese}>Portuguese</button>
            </DivLanguagesButtons>
        </>
    );
};

export default Languagecomponent;
