/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import propTypes from 'prop-types'
import { CardStyled, ContainerMoldCard, ContainerToLike, IconLendItem, IconLike, IconToRight } from './styled';
import { BsChevronRight, BsBookmarkPlus, BsHeart, BsBookmarkCheckFill,BsHeartFill } from "react-icons/bs";

const Bookcard = ({bookName,category,author,resume,amount, image}) => {

    const [open, setOpen] = useState(false);
    const [isLike, setisLike] = useState(false);
    const [isLend, setisLend] = useState(false);

    return (
        <>
            <CardStyled>
                <ContainerMoldCard isOpen={open}>
                    {/* Informações dos Livros */}
                </ContainerMoldCard>

                <ContainerToLike isOpen={open} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
                    <IconToRight isOpen={open}>
                        <BsChevronRight />
                    </IconToRight>
                    <IconLike isOpen={open} title='Lend Item' onClick={() => setisLike(!isLike)}>
                        {
                            isLike ?
                                <BsBookmarkCheckFill />
                            :
                                <BsBookmarkPlus />
                        }
                    </IconLike>
                    <IconLendItem isOpen={open} title='Add to Favorites' onClick={() => setisLend(!isLend)}>
                        {
                            isLend ?
                                <BsHeartFill />
                            :
                                <BsHeart />
                        }
                    </IconLendItem>
                </ContainerToLike>
                
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
