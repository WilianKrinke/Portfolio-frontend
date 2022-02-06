import lottie from 'lottie-web';
import React, { memo, useEffect } from 'react';
import alert from '../../assets/not-found.json';
import './styled.css';

const LottieNotFound = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#NotFound'),
            animationData: alert,
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <>
            <section className="section" title="Not Found">
                <div
                    id="NotFound"
                    style={{
                        width: '500px',
                        height: '380px',
                    }}
                />
            </section>
        </>
    );
};

export default memo(LottieNotFound);
