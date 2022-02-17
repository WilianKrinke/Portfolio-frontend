import React from 'react';
import { useSelector } from 'react-redux';
import { ExternalContainerFooter, H4 } from './styled';
import translate from '../../i18n/translate';

const Externalfooter = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <ExternalContainerFooter $darkmode={darkMode}>
                <H4 $darkmode={darkMode}>{translate('developedby')}</H4>
            </ExternalContainerFooter>
        </>
    );
};

export default Externalfooter;
