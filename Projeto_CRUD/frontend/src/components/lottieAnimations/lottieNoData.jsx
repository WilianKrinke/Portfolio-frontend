import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import noresults from '../../assets/no-results.json';

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
      <p>No Data Found</p>
    </>
  );
};

export default Lottienodata;
