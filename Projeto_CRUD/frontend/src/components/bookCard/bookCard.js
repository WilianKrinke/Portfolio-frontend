/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types'
import { CardStyled, ContainerMoldCard } from './styled';

const Bookcard = ({bookName,category,author,resume,amount, image}) => {
    return (
        <>
            <CardStyled>
                
            </CardStyled>
        </>
    );
}

Bookcard.propTypes = {
    bookName: propTypes.string,
    category: propTypes.string,
    author: propTypes.string,
    resume: propTypes.string,
    amount: propTypes.number,
    image: propTypes.string
}



export default Bookcard;
