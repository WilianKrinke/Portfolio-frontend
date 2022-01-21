import React, { useEffect, memo } from 'react';
import lottie from 'lottie-web';
import noresults from '../../assets/no-results.json';
import propTypes from 'prop-types';
import './styled.css';

const Lottienodata = ({ word }) => {
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
          <span className="word1">No</span>
          <span className="word2">{word}</span>
        </div>
      </section>
    </>
  );
};

Lottienodata.propTypes = {
  word: propTypes.string.isRequired,
};

export default memo(Lottienodata);
