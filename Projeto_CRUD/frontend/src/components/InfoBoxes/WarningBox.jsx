/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { SubDivModal2 } from './styled/styled';

const Warningbox = (objectLendBookBox) => {
    const { bookName, handleLend, closeModal } = objectLendBookBox;
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <SubDivModal2 $darkmode={darkMode}>
            <p>{bookName}</p>
        </SubDivModal2>
    );
};

Warningbox.propTypes = {
    objectLendBookBox: propTypes.object,
};

export default Warningbox;
