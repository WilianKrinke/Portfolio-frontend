import React, { useEffect, useState, memo } from 'react';
import { Phrase, ScrollArrow } from './styled';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector } from 'react-redux';

const Scrolltotop = () => {
  const [scrollElement, setScrollElement] = useState(false);
  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const positionY = window.scrollY;
    if (positionY >= 900) {
      setScrollElement(true);
    } else {
      setScrollElement(false);
    }
  }

  function handleClickScroll() {
    scroll.scrollToTop();
  }

  return (
    <>
      {scrollElement && (
        <>
          <ScrollArrow title="Scroll to Top" onClick={handleClickScroll} $darkmode={darkMode} />
          <Phrase $darkmode={darkMode} onClick={handleClickScroll}>
            Top
          </Phrase>
        </>
      )}
    </>
  );
};

export default memo(Scrolltotop);
