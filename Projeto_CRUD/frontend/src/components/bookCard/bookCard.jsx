/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import Modal from 'react-modal';
import lendBook from '../../utils/lendBooks/lendBook';
import { format, addBusinessDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ToastContainer, toast } from 'react-toastify';
import {
  CardStyled,
  ContainerMoldCard,
  ContainerResume,
  ContainerToLike,
  DivModal,
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
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import isBorrowedByUser from '../../utils/lendBooks/isBorrowedByUser';
import returnBook from '../../utils/returnBooks/returnTheBook';

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
  rating,
}) => {
  const [open, setOpen] = useState(false);
  const [isLend, setisLend] = useState(false);
  const [isLike, setisLike] = useState(false);
  const [isAvailable] = useState(available);
  const [seeMore, setseeMore] = useState(false);
  const [modalLendBookIsOpen, setmodalLendBookIsOpen] = useState(false);
  const [modalReturnBook, setmodalReturnBook] = useState(false);

  async function handleLend() {
    const userId = user.idUser;
    const userName = user.userName;

    const objectDatas = {
      idBook,
      bookName,
      userId,
      userName,
    };

    try {
      const isBookBorrowByUserResponse = await isBorrowedByUser(objectDatas);
      const isBookBorrowByUser = isBookBorrowByUserResponse.data.isUserLendThisBook;

      if (isBookBorrowByUser == false) {
        const response = await lendBook(objectDatas);
        const borrowBook = response.data.isRegister;

        if (borrowBook == true) {
          setisLend(true);
          setmodalLendBookIsOpen(false);
          toast.success('Successfully borrowed book!');
        } else {
          toast.warn('Something is wrong, contact the administrator');
        }
      } else {
        toast.warn('Book already borrowed');
      }
    } catch (error) {
      toast.warn('Something is wrong, contact the administrator');
      console.log(error);
    }
  }

  async function handleReturnBook() {
    const userId = user.idUser;
    const userName = user.userName;

    const objectDatas = {
      idBook,
      bookName,
      userId,
      userName,
    };

    returnBook(objectDatas);
  }

  function handleAddFav() {
    setisLike(!isLike);
    //ADICIONAR AOS FAVORITOS
    alert('Adicionou aos favoritos');
  }

  function handleSeeMore() {
    setseeMore(!seeMore);
  }

  function closeModal() {
    setmodalLendBookIsOpen(false);
    setmodalReturnBook(false);
    setisLend(false);
  }

  function ratingChanged() {
    //FAZER RATING MUDAR NO BACKEND
    alert('Alterou o rating');
  }

  const today = format(new Date(), 'dd-MM-yyyy', { locale: ptBR });
  const threeDaysBusinessAfter = format(addBusinessDays(new Date(), 3), 'dd-MM-yyyy');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '450px',
      height: '300px',
      display: 'flex',
      alignItens: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#F9FFF9',
    },
    overlay: {
      backgroundColor: 'transparent',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5.9px)',
    },
  };

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
              <IconLike isOpen={open} isLend={isLend}>
                {!isLend ? (
                  <BsBookmarkPlus title="Return the Book" onClick={() => setmodalLendBookIsOpen(true)} />
                ) : (
                  <BsBookmarkCheckFill title="Click to borrow" onClick={() => setmodalReturnBook(true)} />
                )}
              </IconLike>
            ) : (
              <IconItenBorrowedByUser isOpen={open} title="Click to return the Book">
                <BsBookmarkCheckFill title="Click to borrow" onClick={() => setmodalReturnBook(true)} />
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
      <Modal
        ariaHideApp={false}
        isOpen={modalLendBookIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirmed Modal"
      >
        <DivModal>
          <div className="disclaimer_lend_book" title="Disclaimer">
            <p>
              Do you confirm the loan of the book <strong>&quot;{bookName}&quot;</strong> on the{' '}
              <strong>{today}</strong> with the return for the <strong>{threeDaysBusinessAfter}</strong>?
            </p>
          </div>
          <div className="container_buttons_lend_book">
            <ButtonConfirmedLoanBook onClick={handleLend} title="Confirm">
              Confirm
            </ButtonConfirmedLoanBook>
            <ButtonCancelLoanBook onClick={closeModal} title="Cancel">
              Cancel
            </ButtonCancelLoanBook>
          </div>
        </DivModal>
      </Modal>

      <Modal
        ariaHideApp={false}
        isOpen={modalReturnBook}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirmed Modal"
      >
        <DivModal>
          <div className="disclaimer_lend_book" title="Disclaimer">
            <p>
              Do you confirm returning the book <strong>&quot;{bookName}&quot;</strong>?
            </p>
          </div>
          <div className="container_buttons_lend_book">
            <ButtonConfirmedLoanBook title="Confirm" onClick={handleReturnBook}>
              Confirm
            </ButtonConfirmedLoanBook>
            <ButtonCancelLoanBook onClick={closeModal} title="Cancel">
              Cancel
            </ButtonCancelLoanBook>
          </div>
        </DivModal>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        width={500}
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
  rating: propTypes.number,
};

export default Bookcard;
