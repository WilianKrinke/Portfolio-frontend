/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types'
import { CardStyled, ContainerMoldCard, ContainerToLike, IconLendItem, IconLike, IconNotAvailable, IconToRight } from './styled';
import { BsChevronRight, BsBookmarkPlus, BsHeart, BsBookmarkCheckFill, BsHeartFill,BsBookmarkXFill } from "react-icons/bs";
import lendBook from '../../utils/lendBooks/lendBook';

const Bookcard = ({bookName,category,author,resume,amount, image, available, idBook}) => {

    const [open, setOpen] = useState(false);

    const [isLend, setisLend] = useState(false);
    const [isLike, setisLike] = useState(false);

    const [isAvailable] = useState(available);

    async function handleLikeLend(){
       
        const userId = sessionStorage.getItem('idUser')
        const userName = sessionStorage.getItem('userName')

        const objectDatas = {
            idBook,
            bookName,
            userId,
            userName
        }        

        const response = await lendBook(objectDatas)
        const isRegister = response.data.isRegister

        if (isRegister ==  true) {
            setisLend(true)
        } else {
            //Fazer tosty de aviso que Livro já está emprestado
            alert('Este Livro já está emprestado')
        }
    }

    function handleAddFav(){
        setisLike(!isLike)
        //ADICIONA AOS FAVORITOS
    }

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

                    {
                        isAvailable == 1 ? 
                            <IconLike isOpen={open} title='Lend Item' onClick={() => handleLikeLend()}>
                                {
                                    isLend ?
                                        <BsBookmarkCheckFill />
                                    :
                                        <BsBookmarkPlus />
                                }
                            </IconLike>
                        :

                            <IconNotAvailable isOpen={open} title='not available'>
                                <BsBookmarkXFill />
                            </IconNotAvailable>

                    }


                    <IconLendItem isOpen={open} title='Add to Favorites' onClick={() => handleAddFav()}>
                        {
                            isLike ?
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
    image: propTypes.string,
    available: propTypes.any,
    idBook: propTypes.number
}

export default Bookcard;
