/* eslint-disable no-unused-vars */
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Foto1, Foto2, Foto3, Foto4 } from '../../assets/images';
import { DivCarousel, DivItem } from './styled';

const Tutorialcarousel = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const arrayObjectPhotos = [
        {
            id: 1,
            photo: Foto1,
            description: 'Set your preferred language',
        },
        {
            id: 2,
            photo: Foto2,
            description:
                "Log in with your username and password. If you don't have an account, click sign up. If you forgot your password, click the recovery link.",
        },
        {
            id: 3,
            photo: Foto3,
            description: 'If you do not have a registration, click on sign up, fill in the form and click on register',
        },
        {
            id: 4,
            photo: Foto4,
            description:
                'If you forgot your password, click on "forgot your password?". You will receive an email with a password reset instruction.',
        },
    ];

    return (
        <>
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
