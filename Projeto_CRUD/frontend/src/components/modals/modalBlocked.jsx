import React from 'react';
import { useSelector } from 'react-redux';
import { DivInternalUserBlocked, DivModalUserBlocked, DivWarningUserBlocked, IconWarning, P } from './styleds/styled';

const Modalblocked = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <DivModalUserBlocked $darkmode={darkMode}>
                <DivWarningUserBlocked $darkmode={darkMode}>
                    <DivInternalUserBlocked $darkmode={darkMode}>
                        <IconWarning />
                        <P $darkmode={darkMode}>-User Blocked for Late Book Delivery</P>
                        <P $darkmode={darkMode}>-X days left to unlock</P>
                    </DivInternalUserBlocked>
                </DivWarningUserBlocked>
            </DivModalUserBlocked>
        </>
    );
};

export default Modalblocked;
