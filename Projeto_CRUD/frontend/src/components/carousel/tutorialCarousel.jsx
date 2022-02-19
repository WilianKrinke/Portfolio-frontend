import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { DivCarousel, DivItem } from './styled';

const Tutorialcarousel = () => {
    return (
        <>
            <DivCarousel>
                <CarouselProvider totalSlides={3} touchEnabled>
                    <Slider style={{ height: '400px', width: '90vw', position: 'relative', top: '11px' }}>
                        <Slide index={0}>
                            <DivItem>
                                <p>Item 1</p>
                            </DivItem>
                        </Slide>
                        <Slide index={1}>
                            <DivItem>
                                <p>Item 2</p>
                            </DivItem>
                        </Slide>
                        <Slide index={2}>
                            <DivItem>
                                <p>Item 3</p>
                            </DivItem>
                        </Slide>
                    </Slider>
                    <div>
                        <ButtonBack style={{ border: 'none', backgroundColor: 'transparent' }}>
                            {BsChevronCompactLeft}
                        </ButtonBack>
                        <ButtonNext style={{ border: 'none', backgroundColor: 'transparent' }}>
                            {BsChevronCompactRight}
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </DivCarousel>
        </>
    );
};

export default Tutorialcarousel;
