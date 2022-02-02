import React, { useState, memo } from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import {
  B,
  CardStyled,
  ContainerMoldCard,
  ContainerResume,
  ContainerToLike,
  DivIconBorrowed,
  DivIconFavorite,
  DivIconLend,
  DivIconNotAvailable,
  FirstContainerInfo,
  H2,
  IconSeeMoreLess,
  P,
  ParagraphResume,
  SecondContainerInfo,
} from './styled';
import { BsBookmarkPlus, BsHeart, BsBookmarkCheckFill, BsHeartFill, BsBookmarkXFill } from 'react-icons/bs';
import { removeFavorite } from '../../utils/favorites/removeFavorite';
import { useNavigate } from 'react-router-dom';
import addFavorites from '../../utils/favorites/addFavorites';
import ModalLendBook from '../modals/modalLendBook';
import ModalReturnBook from '../modals/modalReturnBook';
import ModalImage from '../modals/modalImage';
import sendRating from '../../utils/sendRating/sendRating';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { useSelector } from 'react-redux';

const Bookcard = ({ userName, idUser, bookInfo }) => {
  const { idBook, bookName, author, category, resume, rating, image, amount, isBorrowedByUser, isFavoriteByUser } =
    bookInfo;

  const objectDatas = {
    idUser,
    userName,
    idBook,
    bookName,
  };

  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
  console.log(darkMode);

  const [isLend, setisLend] = useState(isBorrowedByUser);
  const [isLike, setisLike] = useState(isFavoriteByUser);
  const [amountState, setamountState] = useState(amount);
  const [seeMore, setseeMore] = useState(false);
  const [modalLendBookIsOpenState, setmodalLendBookIsOpen] = useState(false);
  const [modalReturnBookState, setmodalReturnBook] = useState(false);
  const [modalImage, setmodalImage] = useState(false);

  const navigate = useNavigate();

  async function handleAddFav() {
    try {
      const objectDatasFavorites = {
        ...objectDatas,
        author,
        category,
        resume,
        rating,
        image,
      };

      setisLike(true);
      const response = await addFavorites(objectDatasFavorites);

      if (response === false) {
        tokenTimeOut(navigate);
      }

      const { isRegisterFavorite } = response;

      if (isRegisterFavorite === true) {
        toast.success('Book added to favorites');
      } else {
        setisLike(false);
        throw new Error('Client Error - handleAddFav');
      }
    } catch (error) {
      setisLike(false);
      console.log(error);
      //para página de erro
    }
  }

  async function handleRemoveFavorite() {
    try {
      setisLike(false);
      const response = await removeFavorite(objectDatas);

      if (response === false) {
        tokenTimeOut(navigate);
      }

      const { isRemoved } = response;

      if (isRemoved === true) {
        toast.success('Book removed from favorites');
      } else {
        setisLike(true);
        throw new Error('Client Error - handleAddFav');
      }
    } catch (error) {
      setisLike(true);
      console.log(error);
      //para a página de erros
    }
  }

  function handleSeeMore() {
    setseeMore(!seeMore);
  }

  async function handleRating(e) {
    try {
      const response = await sendRating(e, idBook);
      if (response === false) {
        tokenTimeOut(navigate);
      }

      if (response === null) {
        throw new Error('Client Error - handleRating');
      }
    } catch (error) {
      console.log(error);
      //para página de erros
    }
  }

  function handleModalImage() {
    setmodalImage(!modalImage);
  }

  function handleModalBorrowBook() {
    setmodalLendBookIsOpen(true);
    setisLend(true);
  }

  function handleModalReturnBook() {
    setmodalReturnBook(true);
    setisLend(false);
  }

  return (
    <>
      <CardStyled darkMode={darkMode}>
        <ContainerMoldCard>
          <FirstContainerInfo>
            <div className="image">
              <img src={image} alt="Capa" loading="lazy" title="Book cover" onClick={handleModalImage} />
            </div>
            <div className="title_rating">
              <H2 title="Book Title" darkMode={darkMode}>
                {bookName}
              </H2>
              <div className="rating" title={`Rating ${rating}`}>
                <ReactStars
                  count={5}
                  size={18}
                  value={rating}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#000"
                  onChange={(e) => handleRating(e)}
                />
              </div>
            </div>
          </FirstContainerInfo>

          <SecondContainerInfo>
            <div className="container_author" title="Author">
              <P darkMode={darkMode}>
                <B darkMode={darkMode}>Author:</B> {author}
              </P>
            </div>
            <div className="container_category" title="Category">
              <P darkMode={darkMode}>
                <B darkMode={darkMode}>Category:</B> {category}
              </P>
            </div>
            <div className="container_text_resume">
              <ContainerResume className="container_resume" title="Resume" seemore={seeMore}>
                <ParagraphResume seemore={seeMore}>{resume}</ParagraphResume>
              </ContainerResume>
              <div className="container_see_more" onClick={handleSeeMore}>
                <IconSeeMoreLess title={`See ${seeMore ? 'Less' : 'More'}`} $seemore={seeMore} />
              </div>
            </div>
            <div className="container_amount" title="Copies">
              <P darkMode={darkMode}>
                <B darkMode={darkMode}>Copies:</B> {amountState === 0 ? 'Not Available' : amountState}
              </P>
            </div>
          </SecondContainerInfo>
        </ContainerMoldCard>

        <ContainerToLike>
          {amountState > 0 ? (
            !isLend ? (
              <DivIconLend onClick={handleModalBorrowBook}>
                <BsBookmarkPlus title="Click to borrow" />
              </DivIconLend>
            ) : (
              <DivIconBorrowed title="Click to return the Book" onClick={handleModalReturnBook}>
                <BsBookmarkCheckFill title="Click to return the Book" />
              </DivIconBorrowed>
            )
          ) : (
            <DivIconNotAvailable title="Not Available">
              <BsBookmarkXFill />
            </DivIconNotAvailable>
          )}

          <DivIconFavorite>
            {isLike ? (
              <BsHeartFill onClick={handleRemoveFavorite} title="Remove from Favorites" />
            ) : (
              <BsHeart onClick={handleAddFav} title="Add to Favorites" />
            )}
          </DivIconFavorite>
        </ContainerToLike>
      </CardStyled>

      <ModalLendBook
        modalLendBookIsOpen={modalLendBookIsOpenState}
        setmodalLendBookIsOpen={setmodalLendBookIsOpen}
        setmodalReturnBook={setmodalReturnBook}
        setisLend={setisLend}
        setamountState={setamountState}
        userAndBookDatas={objectDatas}
        bookInfo={bookInfo}
      />

      <ModalReturnBook
        modalReturnBook={modalReturnBookState}
        setmodalLendBookIsOpen={setmodalLendBookIsOpen}
        setmodalReturnBook={setmodalReturnBook}
        setisLend={setisLend}
        setamountState={setamountState}
        userAndBookDatas={objectDatas}
        bookInfo={bookInfo}
      />

      <ModalImage image={image} isOpen={modalImage} setmodalImage={setmodalImage} />
    </>
  );
};

Bookcard.propTypes = {
  userName: propTypes.string,
  idUser: propTypes.number,
  bookInfo: propTypes.object,
};

export default memo(Bookcard);
