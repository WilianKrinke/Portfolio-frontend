import lottie from 'lottie-web';
import propTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import noresults from '../../assets/no-results.json';
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
            <section className="section" title="No Data to Display">
                <div id="NoData" style={{ width: '100%', height: 350 }} />
                <div className="div_words">
                    <Span className="word1" $darkmode={darkMode}>
                        No
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
    word: propTypes.string.isRequired,
};

export default memo(Lottienodata);
