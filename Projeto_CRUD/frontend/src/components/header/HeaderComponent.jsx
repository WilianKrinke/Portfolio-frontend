import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { H1, HeaderStyled } from './styled';

const HeaderComponent = ({ phrase }) => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <HeaderStyled $darkmode={darkMode}>
            <div className="title">
                <H1 $darkmode={darkMode}>{phrase}</H1>
            </div>
        </HeaderStyled>
    );
};

HeaderComponent.propTypes = {
    phrase: propTypes.object,
};

export default HeaderComponent;
