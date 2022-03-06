import Pagination from '@mui/material/Pagination';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { useSelector } from 'react-redux';
import arrayObjectPhotos from './staticDatasCarousel';
import { DivCarousel, DivItem } from './styled';

const Tutorialcarousel = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <Pagination count={arrayObjectPhotos.length} variant="outlined" shape="rounded" />
            <DivCarousel>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={arrayObjectPhotos.length}
                    touchEnabled
                    className="carouselProvider"
                >
                    <ButtonBack className={darkMode ? 'btn_dark' : 'btn'}>Back</ButtonBack>
                    <Slider className={darkMode ? 'slider_dark' : 'slider'}>
                        {arrayObjectPhotos.map((item) => {
                            return (
                                <>
                                    <Slide index={item.id} key={item.id}>
                                        <DivItem>
                                            <div className="div_paragraph">
                                                <p className={darkMode ? 'paragraph_dark' : 'paragraph'}>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="div_img">
                                                <img src={item.photo} alt="Foto 1" loading="lazy" className="img" />
                                            </div>
                                        </DivItem>
                                    </Slide>
                                </>
                            );
                        })}
                    </Slider>
                    <ButtonNext className={darkMode ? 'btn_dark' : 'btn'}>Next</ButtonNext>
                </CarouselProvider>
            </DivCarousel>
        </>
    );
};

export default Tutorialcarousel;
