/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import Modal from 'react-modal';
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
  const [seeMore, setseeMore] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  async function handleLikeLend() {
    const userId = user.idUser;
    const userName = user.userName;

    const objectDatas = {
      idBook,
      bookName,
      userId,
      userName,
    };

    setmodalIsOpen(true);

    // const response = await lendBook(objectDatas);
    // const isRegister = response.data.isRegister;

    // if (isRegister == true) {
    //   setisLend(true);
    // } else {
    //   //Fazer tosty de aviso que Livro já está emprestado
    //   alert('Este Livro já está emprestado');
    // }
  }

  function handleAddFav() {
    setisLike(!isLike);
    //ADICIONA AOS FAVORITOS
  }

  function teste() {
    console.log(seeMore);
    setseeMore(!seeMore);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function closeModal() {
    setmodalIsOpen(false);
  }

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
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
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
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
              <div className="container_see_more" onClick={teste}>
                {seeMore ? <BsChevronCompactUp title="See less" /> : <BsChevronCompactDown title="See more" />}
              </div>
            </div>

            <div className="container_amount" title="Copies">
              <p>Copies: {amount}</p>
            </div>
          </SecondContainerInfo>
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
