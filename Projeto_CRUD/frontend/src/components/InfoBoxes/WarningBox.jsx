/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { IconWarning, P, SubDivModal } from './styled/styled';

const Warningbox = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <SubDivModal $darkmode={darkMode}>
            <IconWarning $darkmode={darkMode} />
            <div className="div_warnings">
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-Lorem Ipsum Rule</P>
                <P $darkmode={darkMode}>-In case of delay, a fine of three days of blocking will be applied</P>
            </div>
        </SubDivModal>
    );
};

Warningbox.propTypes = {
    objectLendBookBox: propTypes.object,
};

export default Warningbox;
