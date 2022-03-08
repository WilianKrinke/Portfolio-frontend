import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Tutorialcarousel from '../../components/carousel/tutorialCarousel.jsx';
import InternalFooter from '../../components/footer/InternalFooter.jsx';
import HeaderComponent from '../../components/header/HeaderComponent.jsx';
import Loading from '../../components/loading/Loading.jsx';
import Menu from '../../components/menu/Menu.jsx';
import translate from '../../i18n/translate.js';
import { LinkStyled, TutorialMain } from './styled.js';

const Tutorial = () => {
    const [loadingState, setloadingState] = useState(true);
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
    const { sector } = useParams();

    const isExternalTutorial = sector === 'true';

    useEffect(() => {
        setloadingState(false);
    }, []);

    return (
        <>
            {loadingState ? (
                <Loading />
            ) : (
                <>
                    {isExternalTutorial && <Menu />}
                    <HeaderComponent $darkmode={darkMode} phrase={translate('tutorial')} />
                    <TutorialMain $darkmode={darkMode}>
                        {!isExternalTutorial && (
                            <LinkStyled to="/" $darkmode={darkMode}>
                                Back Home
                            </LinkStyled>
                        )}
                        <Tutorialcarousel />
                    </TutorialMain>
                    <InternalFooter $darkmode={darkMode} />
                </>
            )}
        </>
    );
};

export default Tutorial;
