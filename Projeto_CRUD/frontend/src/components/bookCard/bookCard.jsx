import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import {
  CardStyled,
  ContainerMoldCard,
  ContainerResume,
  ContainerToLike,
  FirstContainerInfo,
  IconBorrowed,
  IconLend,
  IconLendItem,
  IconNotAvailable,
  ParagraphResume,
  SecondContainerInfo,
} from './styled';
import {
  BsBookmarkPlus,
  BsHeart,
  BsBookmarkCheckFill,
  BsHeartFill,
  BsBookmarkXFill,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from 'react-icons/bs';
import { removeFavorite } from '../../utils/favorites/removeFavorite';
import { useNavigate } from 'react-router-dom';
import addFavorites from '../../utils/favorites/addFavorites';
import ModalLendBook from '../modals/modalLendBook';
import ModalReturnBook from '../modals/modalReturnBook';
import ModalImage from '../modals/modalImage';
import sendRating from '../../utils/sendRating/sendRating';

const Bookcard = ({
  bookName,
  category,
  author,
  resume,
  amount,
  image,
  available,
  idBook,
  userName,
  userId,
  borrowedByUser = false,
  favoriteByUser = false,
  rating,
}) => {
  const [isLend, setisLend] = useState(borrowedByUser);
  const [isLike, setisLike] = useState(favoriteByUser);
  const [isAvailable] = useState(available);
  const [seeMore, setseeMore] = useState(false);
  const [modalLendBookIsOpenState, setmodalLendBookIsOpen] = useState(false);
  const [modalReturnBookState, setmodalReturnBook] = useState(false);
  const [modalImage, setmodalImage] = useState(false);

  const objectDatas = {
    idBook,
    bookName,
    userId,
    userName,
    author,
    category,
    resume,
    rating,
    image,
  };

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
        toast.warn('Token time expired, please re-login');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }

      const { isRegisterFavorite } = response;

      if (isRegisterFavorite === true) {
        toast.success('Book added to favorites');
      } else {
        setisLike(false);
        toast.warn('Book not added to favorites');
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
        toast.warn('Token time expired, please re-login');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }

      const { isRemoved } = response;

      if (isRemoved === true) {
        toast.success('Book removed from favorites');
      } else {
        setisLike(true);
        toast.warn('Book not removed from favorites');
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

  async function ratingChanged(e) {
    try {
      const response = await sendRating(e, idBook);
      if (response === false) {
        toast.warn('Token time expired, please re-login');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      //para página de erros
    }
  }

  function handleModalImage() {
    setmodalImage(true);
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
      <CardStyled>
        <ContainerMoldCard>
          <FirstContainerInfo>
            <div className="image">
              <img src={image} alt="Capa" loading="lazy" title="Book cover" onClick={handleModalImage} />
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
                  activeColor="#ffff00"
                  onChange={(e) => ratingChanged(e)}
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

        <ContainerToLike>
          {isAvailable == 1 ? (
            isLend == false ? (
              <IconLend>
                <BsBookmarkPlus title="Click to borrow" onClick={handleModalBorrowBook} />
              </IconLend>
            ) : (
              <IconBorrowed title="Click to return the Book">
                <BsBookmarkCheckFill title="Click to return the Book" onClick={handleModalReturnBook} />
              </IconBorrowed>
            )
          ) : (
            <IconNotAvailable title="not available">
              <BsBookmarkXFill />
            </IconNotAvailable>
          )}

          <IconLendItem>
            {isLike ? (
              <BsHeartFill onClick={handleRemoveFavorite} title="Remove from Favorites" />
            ) : (
              <BsHeart onClick={handleAddFav} title="Add to Favorites" />
            )}
          </IconLendItem>
        </ContainerToLike>
      </CardStyled>

      <ModalLendBook
        modalLendBookIsOpen={modalLendBookIsOpenState}
        setmodalLendBookIsOpen={setmodalLendBookIsOpen}
        setmodalReturnBook={setmodalReturnBook}
        setisLend={setisLend}
        bookName={bookName}
        objectDatas={objectDatas}
      />

      <ModalReturnBook
        modalReturnBook={modalReturnBookState}
        setmodalLendBookIsOpen={setmodalLendBookIsOpen}
        setmodalReturnBook={setmodalReturnBook}
        setisLend={setisLend}
        bookName={bookName}
        objectDatas={objectDatas}
      />

      <ModalImage image={image} isOpen={modalImage} setmodalImage={setmodalImage} />
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
  userName: propTypes.string,
  userId: propTypes.number,
  borrowedByUser: propTypes.bool,
  favoriteByUser: propTypes.bool,
  rating: propTypes.number,
};

export default Bookcard;
