/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { ToastContainer, toast } from 'react-toastify';
import {
  CardStyled,
  ContainerMoldCard,
  ContainerResume,
  ContainerToLike,
  FirstContainerInfo,
  IconItenBorrowedByUser,
  IconLendItem,
  IconLike,
  IconNotAvailable,
  IconToRight,
  ParagraphResume,
  SecondContainerInfo,
} from './styled';
import {
  BsChevronRight,
  BsBookmarkPlus,
  BsHeart,
  BsBookmarkCheckFill,
  BsHeartFill,
  BsBookmarkXFill,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from 'react-icons/bs';

import addFavorites from '../../utils/favorites/addFavorites';
import ModalLendBook from '../modals/modalLendBook';
import ModalReturnBook from '../modals/modalReturnBook';
import { removeFavorite } from '../../utils/favorites/removeFavorite';

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
  favoriteByUser = false,
  rating,
}) => {
  const [open, setOpen] = useState(false);
  const [isLend, setisLend] = useState(false);
  const [isLike, setisLike] = useState(false);
  const [isAvailable] = useState(available);
  const [seeMore, setseeMore] = useState(false);
  const [modalLendBookIsOpen, setmodalLendBookIsOpen] = useState(false);
  const [modalReturnBook, setmodalReturnBook] = useState(false);

  const userId = user.idUser;
  const userName = user.userName;

  const objectDatas = {
    idBook,
    bookName,
    userId,
    userName,
  };

  async function handleAddFav() {
    const objectDatasFavorites = {
      ...objectDatas,
      author,
      category,
      resume,
      rating,
    };

    try {
      const response = await addFavorites(objectDatasFavorites);
      console.log(response);

      const { isRegisterFavorite } = response.data;

      if (isRegisterFavorite == true) {
        toast.success('Book added to favorites');
        setisLike(true);
      } else {
        toast.warn('Book not added to favorites');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveFavorite() {
    try {
      const response = await removeFavorite(objectDatas);
      const { isRemoved } = response.data;

      if (isRemoved == true) {
        toast.success('Book removed from favorites');
        setisLike(false);
      } else {
        toast.warn('Book not removed from favorites');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSeeMore() {
    setseeMore(!seeMore);
  }

  function ratingChanged() {
    //FAZER RATING MUDAR NO BACKEND
    alert('Alterou o rating');
  }

  return (
    <>
      <CardStyled seeMore={seeMore}>
        <ContainerMoldCard isOpen={open}>
          <FirstContainerInfo>
            <div className="image">
              <img src={image} alt="Capa" loading="lazy" title="Book cover" />
            </div>
            <div className="title_rating">
              <h2 title="Book Title">
                <strong>{bookName}</strong>
              </h2>
              <div className="rating" title="Rating">
                <ReactStars
                  count={5}
                  size={18}
                  value={rating}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#000"
                  onChange={ratingChanged}
                />
              </div>
            </div>
          </FirstContainerInfo>
          <SecondContainerInfo seeMore={seeMore}>
            <div className="container_author" title="Author">
              <p>
                <strong>Author:</strong> {author}
              </p>
            </div>

            <div className="container_category" title="Category">
              <p>
                <strong>Category:</strong> {category}
              </p>
            </div>

            <div className="container_text_resume">
              <ContainerResume className="container_resume" title="Resume" seeMore={seeMore}>
                <ParagraphResume seeMore={seeMore}>{resume}</ParagraphResume>
              </ContainerResume>
              <div className="container_see_more" onClick={handleSeeMore}>
                {seeMore ? <BsChevronCompactUp title="See less" /> : <BsChevronCompactDown title="See more" />}
              </div>
            </div>

            <div className="container_amount" title="Copies">
              <p>
                <strong>Copies:</strong> {amount}
              </p>
            </div>
          </SecondContainerInfo>
        </ContainerMoldCard>

        <ContainerToLike isOpen={open} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
          <IconToRight isOpen={open}>
            <BsChevronRight />
          </IconToRight>

          {isAvailable == 1 ? (
            borrowedByUser == false ? (
              <IconLike isOpen={open}>
                {isLend ? (
                  <BsBookmarkCheckFill title="Return the Book" onClick={() => setmodalReturnBook(true)} />
                ) : (
                  <BsBookmarkPlus title="Click to borrow" onClick={() => setmodalLendBookIsOpen(true)} />
                )}
              </IconLike>
            ) : (
              <IconItenBorrowedByUser isOpen={open} title="Click to return the Book">
                <BsBookmarkCheckFill title="Return the Book" onClick={() => setmodalReturnBook(true)} />
              </IconItenBorrowedByUser>
            )
          ) : (
            <IconNotAvailable isOpen={open} title="not available">
              <BsBookmarkXFill />
            </IconNotAvailable>
          )}

          <IconLendItem isOpen={open} title="Add to Favorites">
            {favoriteByUser ? (
              <BsHeartFill onClick={handleRemoveFavorite} />
            ) : isLike ? (
              <BsHeartFill onClick={handleRemoveFavorite} />
            ) : (
              <BsHeart onClick={handleAddFav} />
            )}
          </IconLendItem>
        </ContainerToLike>
      </CardStyled>

      <ModalLendBook
        modalLendBookIsOpen={modalLendBookIsOpen}
        setmodalLendBookIsOpen={setmodalLendBookIsOpen}
        setmodalReturnBook={setmodalReturnBook}
        setisLend={setisLend}
        bookName={bookName}
        objectDatas={objectDatas}
      />

      <ModalReturnBook
        modalReturnBook={modalReturnBook}
        setmodalLendBookIsOpen={setmodalLendBookIsOpen}
        setmodalReturnBook={setmodalReturnBook}
        setisLend={setisLend}
        bookName={bookName}
        objectDatas={objectDatas}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        width={500}
        limit={2}
      />
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
  favoriteByUser: propTypes.bool,
  rating: propTypes.number,
};

export default Bookcard;
