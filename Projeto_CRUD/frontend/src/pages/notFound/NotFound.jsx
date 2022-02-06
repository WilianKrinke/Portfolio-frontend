import React from 'react';
import { useSelector } from 'react-redux';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import LottieNotFound from '../../components/lottieAnimations/lottieNotFound';
import { ButtonBackPage, MainNotFound } from './styled';

const Notfound = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    function handleBack() {
        console.log('Clique');
        window.history.back();
    }

    return (
        <>
            <Letterheader phrase="Page Not Found" $darkmode={darkMode} />
            <MainNotFound $darkmode={darkMode}>
                <ButtonBackPage onClick={handleBack} $darkmode={darkMode}>
                    Go Back
                </ButtonBackPage>
                <LottieNotFound />
            </MainNotFound>
            <LetterFooter $darkmode={darkMode} />
        </>
    );
};

export default Notfound;
