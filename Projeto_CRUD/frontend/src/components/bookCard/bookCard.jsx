/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import {
  CardStyled,
  ContainerMoldCard,
  ContainerToLike,
  IconItenBorrowedByUser,
  IconLendItem,
  IconLike,
  IconNotAvailable,
  IconToRight,
} from './styled';
import {
  BsChevronRight,
  BsBookmarkPlus,
  BsHeart,
  BsBookmarkCheckFill,
  BsHeartFill,
  BsBookmarkXFill,
} from 'react-icons/bs';
import lendBook from '../../utils/lendBooks/lendBook';

const Bookcard = ({
  bookName,
  category,
  author,
  resume,
  amount,
  image,
  available,
  idBook,
  user,
  borrowedByUser = false,
}) => {
  const [open, setOpen] = useState(false);

  const [isLend, setisLend] = useState(false);
  const [isLike, setisLike] = useState(false);

  const [isAvailable] = useState(available);

  async function handleLikeLend() {
    const userId = user.idUser;
    const userName = user.userName;

    const objectDatas = {
      idBook,
      bookName,
      userId,
      userName,
    };

    const response = await lendBook(objectDatas);
    const isRegister = response.data.isRegister;

    if (isRegister == true) {
      setisLend(true);
    } else {
      //Fazer tosty de aviso que Livro já está emprestado
      alert('Este Livro já está emprestado');
    }
  }

  function handleAddFav() {
    setisLike(!isLike);
    //ADICIONA AOS FAVORITOS
  }

  return (
    <>
      <CardStyled>
        <ContainerMoldCard isOpen={open}>
          <h3>{bookName}</h3>
        </ContainerMoldCard>

        <ContainerToLike isOpen={open} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
          <IconToRight isOpen={open}>
            <BsChevronRight />
          </IconToRight>

          {isAvailable == 1 ? (
            borrowedByUser == false ? (
              <IconLike
                isOpen={open}
                isLend={isLend}
                title={`${!isLend ? 'Available item' : 'Item already borrowed by the user'}`}
                onClick={() => handleLikeLend()}
              >
                {!isLend ? <BsBookmarkPlus /> : <BsBookmarkCheckFill />}
              </IconLike>
            ) : (
              <IconItenBorrowedByUser isOpen={open} title="Item already borrowed by the user">
                <BsBookmarkCheckFill />
              </IconItenBorrowedByUser>
            )
          ) : (
            <IconNotAvailable isOpen={open} title="not available">
              <BsBookmarkXFill />
            </IconNotAvailable>
          )}

          <IconLendItem isOpen={open} title="Add to Favorites" onClick={() => handleAddFav()}>
            {isLike ? <BsHeartFill /> : <BsHeart />}
          </IconLendItem>
        </ContainerToLike>
      </CardStyled>
    </>
  );
};

Bookcard.propTypes = {
  bookName: propTypes.string,
  category: propTypes.string,
  author: propTypes.string,
  resume: propTypes.string,
  amount: propTypes.number,
  image: propTypes.string,
  available: propTypes.any,
  idBook: propTypes.number,
  user: propTypes.any,
  borrowedByUser: propTypes.bool,
};

export default Bookcard;
