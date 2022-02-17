import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import Languagecomponent from '../languageComponent/languageComponent';
import { H1, HeaderStyled } from './styled';

const HeaderComponent = ({ phrase }) => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <HeaderStyled $darkmode={darkMode}>
            <Languagecomponent />
            <div className="title">
                <H1 $darkmode={darkMode}>{phrase}</H1>
            </div>
        </HeaderStyled>
    );
};

HeaderComponent.propTypes = {
    phrase: propTypes.any,
};

export default HeaderComponent;
