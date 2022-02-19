import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { DivCarousel, DivItem } from './styled';

const Tutorialcarousel = () => {
    return (
        <>
            <DivCarousel>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={3}
                    touchEnabled
                    className="carouselProvider"
                >
                    <ButtonBack className="btn_left">Back</ButtonBack>
                    <Slider className="slider">
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
                    <ButtonNext className="btn_right">Next</ButtonNext>
                </CarouselProvider>
            </DivCarousel>
        </>
    );
};

export default Tutorialcarousel;
