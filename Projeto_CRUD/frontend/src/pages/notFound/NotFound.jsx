import React from 'react';
import { useSelector } from 'react-redux';
import InternalFooter from '../../components/footer/InternalFooter';
import HeaderComponent from '../../components/header/HeaderComponent';
import LottieNotFound from '../../components/lottieAnimations/lottieNotFound';
import { ButtonBackPage, MainNotFound } from './styled';

const Notfound = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    function handleBack() {
        window.history.back();
    }

    return (
        <>
            <HeaderComponent phrase="Page Not Found" />
            <MainNotFound $darkmode={darkMode}>
                <ButtonBackPage onClick={handleBack} $darkmode={darkMode}>
                    Go Back
                </ButtonBackPage>
                <LottieNotFound />
            </MainNotFound>
            <InternalFooter />
        </>
    );
};

export default Notfound;
