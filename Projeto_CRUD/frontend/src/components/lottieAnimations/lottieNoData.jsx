import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import noresults from '../../assets/no-results.json';
import './styled.css';

const Lottienodata = () => {
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
          <span className="word1">No</span>
          <span className="word2">Data</span>
          <span className="word3">Found</span>
        </div>
      </section>
    </>
  );
};

export default Lottienodata;
