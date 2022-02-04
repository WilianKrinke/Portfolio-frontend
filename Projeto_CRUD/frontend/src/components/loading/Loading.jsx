/* eslint-disable no-unused-vars */
import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { DivLoading } from './DivLoading';

const Loading = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
    return (
        <>
            <DivLoading $darkmode={darkMode}>
                <ReactLoading
                    type={'bars'}
                    color={`${darkMode ? 'rgba(185, 185, 185, 0.8)' : 'rgba(0, 0, 0, 0.31)'}`}
                    height={175}
                    width={175}
                />
            </DivLoading>
        </>
    );
};

export default Loading;
