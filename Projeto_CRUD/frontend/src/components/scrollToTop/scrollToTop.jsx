import React, { useEffect, useState } from 'react';
import { ScrollArrow } from './styled';
import { animateScroll as scroll } from 'react-scroll';

const Scrolltotop = () => {
  const [scrollElement, setScrollElement] = useState(false);

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
          <ScrollArrow title="Scroll to Top" onClick={handleClickScroll} />
        </>
      )}
    </>
  );
};

export default Scrolltotop;