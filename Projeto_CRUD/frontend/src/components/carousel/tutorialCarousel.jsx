/* eslint-disable no-unused-vars */
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Foto1, Foto2 } from '../../assets/images';
import { DivCarousel, DivItem } from './styled';

const Tutorialcarousel = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

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
                    <ButtonBack className={darkMode ? 'btn_dark' : 'btn'}>Back</ButtonBack>
                    <Slider className={darkMode ? 'slider_dark' : 'slider'}>
                        <Slide index={0}>
                            <DivItem>
                                <div className="div_paragraph">
                                    <p className={darkMode ? 'paragraph_dark' : 'paragraph'}>
                                        Lorem Lorem Lorem Lorem Lorem Lorem
                                    </p>
                                </div>
                                <div className="div_img">
                                    <img src={Foto1} alt="Foto 1" loading="lazy" className="img" />
                                </div>
                            </DivItem>
                        </Slide>
                        <Slide index={1}>
                            <DivItem>
                                <div className="div_paragraph">
                                    <p className={darkMode ? 'paragraph_dark' : 'paragraph'}>
                                        Lorem Lorem Lorem Lorem Lorem Lorem
                                    </p>
                                </div>
                                <div className="div_img">
                                    <img src={Foto2} alt="Foto 2" loading="lazy" className="img" />
                                </div>
                            </DivItem>
                        </Slide>
                        <Slide index={2}>
                            <DivItem>
                                <p>Item 3</p>
                            </DivItem>
                        </Slide>
                    </Slider>
                    <ButtonNext className={darkMode ? 'btn_dark' : 'btn'}>Next</ButtonNext>
                </CarouselProvider>
            </DivCarousel>
        </>
    );
};

export default Tutorialcarousel;
