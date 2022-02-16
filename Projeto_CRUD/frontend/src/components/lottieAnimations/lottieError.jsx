import lottie from 'lottie-web';
import React, { memo, useEffect } from 'react';
import alert from '../../assets/lottiesJson/alert.json';
import './styled.css';

const LottieAlert = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#NoData'),
            animationData: alert,
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <>
            <section className="section" title="Warning">
                <div
                    id="NoData"
                    style={{ width: '100%', height: 350, position: 'relative', top: '30px', left: '7px' }}
                />
            </section>
        </>
    );
};

export default memo(LottieAlert);
