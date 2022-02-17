import lottie from 'lottie-web';
import propTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import noresults from '../../assets/lottiesJson/no-results.json';
import translate from '../../i18n/translate';
import { Span } from './styled';
import './styled.css';

const Lottienodata = ({ word }) => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#NoData'),
            animationData: noresults,
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <>
            <section className="section">
                <div id="NoData" style={{ width: '100%', height: 350 }} />
                <div className="div_words">
                    <Span className="word1" $darkmode={darkMode}>
                        {translate('no')}{' '}
                    </Span>
                    <Span className="word2" $darkmode={darkMode}>
                        {word}
                    </Span>
                </div>
            </section>
        </>
    );
};

Lottienodata.propTypes = {
    word: propTypes.object,
};

export default memo(Lottienodata);
