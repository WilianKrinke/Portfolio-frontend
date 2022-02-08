import React from 'react';
import { useSelector } from 'react-redux';
import { SubDivModal } from './styled/styled';

const Warningbox = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <SubDivModal $darkmode={darkMode}>
            <p>Box Warning</p>
        </SubDivModal>
    );
};

export default Warningbox;
