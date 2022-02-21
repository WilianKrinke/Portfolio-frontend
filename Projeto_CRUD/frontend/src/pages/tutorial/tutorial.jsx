import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tutorialcarousel from '../../components/carousel/tutorialCarousel.jsx';
import InternalFooter from '../../components/footer/InternalFooter.jsx';
import HeaderComponent from '../../components/header/HeaderComponent.jsx';
import Loading from '../../components/loading/Loading.jsx';
import Menu from '../../components/menu/Menu';
import translate from '../../i18n/translate.js';
import { TutorialMain } from './styled.js';

const Tutorial = () => {
    const [loadingState, setloadingState] = useState(true);
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    useEffect(() => {
        setloadingState(false);
    }, []);

    return (
        <>
            {loadingState ? (
                <Loading />
            ) : (
                <>
                    <Menu />
                    <HeaderComponent $darkmode={darkMode} phrase={translate('Tutorial')} />
                    <TutorialMain $darkmode={darkMode}>
                        <Tutorialcarousel />
                    </TutorialMain>
                    <InternalFooter $darkmode={darkMode} />
                </>
            )}
        </>
    );
};

export default Tutorial;
