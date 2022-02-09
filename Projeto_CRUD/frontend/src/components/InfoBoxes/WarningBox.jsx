/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { P, SubDivModal } from './styled/styled';

const Warningbox = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <SubDivModal $darkmode={darkMode}>
            <div className="div_warnings">
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-In case of delay, a fine will be applied, proportionally to the days late</P>
            </div>
        </SubDivModal>
    );
};

Warningbox.propTypes = {
    objectLendBookBox: propTypes.object,
};

export default Warningbox;
