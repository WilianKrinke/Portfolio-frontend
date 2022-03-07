/* eslint-disable no-unused-vars */
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import arrayObjectPhotos from './staticDatasCarousel';
import { DivCarousel, DivItem } from './styled';

const Tutorialcarousel = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
    const [indexState, setIndexState] = useState(1);

    function handlePagination(event, value) {
        setIndexState(value);
    }

    return (
        <>
            <DivCarousel>
                <DivItem>
                    <div className="div_img">
                        <img src={arrayObjectPhotos[indexState].photo} alt="tutorial-photo" className="img" />
                    </div>
                    <div className="div_paragraph">
                        <p className={`${darkMode} ? 'paragraph_dark' : 'paragraph'`}></p>
                    </div>
                </DivItem>
                <Pagination
                    count={arrayObjectPhotos.length}
                    variant="outlined"
                    shape="rounded"
                    color="secondary"
                    showFirstButton
                    showLastButton
                    onChange={handlePagination}
                />
            </DivCarousel>
        </>
    );
};

export default Tutorialcarousel;
