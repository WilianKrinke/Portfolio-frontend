import React from 'react';
import { useSelector } from 'react-redux';
import { ExternalContainerFooter, H4 } from './styled';

const Externalfooter = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <ExternalContainerFooter>
                <H4 $darkmode={darkMode}>Developed by Wilian Krinke</H4>
            </ExternalContainerFooter>
        </>
    );
};

export default Externalfooter;
