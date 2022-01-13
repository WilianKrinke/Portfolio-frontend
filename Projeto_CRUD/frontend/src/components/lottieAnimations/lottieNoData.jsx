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
      <div id="NoData" style={{ width: 400, height: 400 }} />
      <div className="div_words">
        <span className="word1">No</span>
        <span className="word2">Data</span>
        <span className="word3">Found</span>
      </div>
    </>
  );
};

export default Lottienodata;
