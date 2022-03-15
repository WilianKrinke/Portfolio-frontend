import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './pagination.css';
import arrayObjectPhotos from './staticDatasPagination';
import { DivCarousel, DivItem } from './styled';

const TutorialPagination = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
    const [indexState, setIndexState] = useState(0);

    function handlePagination(event, value) {
        setIndexState(value - 1);
    }

    return (
        <>
            <DivCarousel>
                <DivItem>
                    <div className="div_pagination">
                        <Pagination
                            count={arrayObjectPhotos.length}
                            variant="outlined"
                            shape="rounded"
                            color="secondary"
                            showFirstButton
                            showLastButton
                            onChange={handlePagination}
                            className={darkMode ? 'pagination_dark' : 'pagination'}
                        />
                    </div>
                    <div className="div_paragraph">
                        <p className={darkMode ? 'paragraph_dark' : 'paragraph'}>
                            {arrayObjectPhotos[indexState].description}
                        </p>
                    </div>
                    <div className="div_img">
                        <img
                            src={arrayObjectPhotos[indexState].photo}
                            alt="tutorial-photo"
                            className="img"
                            loading="lazy"
                        />
                    </div>
                    <div className="div_pagination">
                        <Pagination
                            count={arrayObjectPhotos.length}
                            variant="outlined"
                            shape="rounded"
                            color="secondary"
                            showFirstButton
                            showLastButton
                            onChange={handlePagination}
                            className={darkMode ? 'pagination_dark' : 'pagination'}
                        />
                    </div>
                </DivItem>
            </DivCarousel>
        </>
    );
};

export default TutorialPagination;
