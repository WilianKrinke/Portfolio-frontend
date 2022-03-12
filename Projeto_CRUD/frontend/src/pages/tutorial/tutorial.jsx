import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Externalfooter from '../../components/footer/externalFooter';
import InternalFooter from '../../components/footer/InternalFooter.jsx';
import HeaderComponent from '../../components/header/HeaderComponent.jsx';
import Loading from '../../components/loading/Loading.jsx';
import Menu from '../../components/menu/Menu.jsx';
import TutorialPagination from '../../components/pagination/tutorialPagination.jsx';
import translate from '../../i18n/translate.js';
import { LinkStyled, TutorialMain } from './styled.js';

const Tutorial = () => {
    const [loadingState, setloadingState] = useState(true);
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
    const { sector } = useParams();

    const isInternalTutorial = sector === 'true';

    useEffect(() => {
        setloadingState(false);
    }, []);

    return (
        <>
            {loadingState ? (
                <Loading />
            ) : (
                <>
                    {isInternalTutorial && <Menu />}
                    <HeaderComponent $darkmode={darkMode} phrase={translate('tutorial')} />
                    <TutorialMain $darkmode={darkMode}>
                        {!isInternalTutorial && (
                            <LinkStyled to="/" $darkmode={darkMode}>
                                Back Home
                            </LinkStyled>
                        )}
                        <TutorialPagination />
                    </TutorialMain>
                    {isInternalTutorial ? <InternalFooter $darkmode={darkMode} /> : <Externalfooter />}
                </>
            )}
        </>
    );
};

export default Tutorial;
