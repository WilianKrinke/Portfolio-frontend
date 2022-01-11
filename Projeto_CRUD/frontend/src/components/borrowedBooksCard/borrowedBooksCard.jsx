/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle, DivInfoLendBook, Icon } from './styled';
import { format, isAfter } from 'date-fns';
import ReactStars from 'react-rating-stars-component';
import ModalImage from '../modals/modalImage';

const Borrowedbookscard = ({ infoDatas }) => {
  const [modalImageBorrowedCards, setmodalImageBorrowedCards] = useState(false);

  const { image, bookName, rating, resume, devolutionDate, lendDate } = infoDatas;

  const lendDateData = new Date(lendDate);
  const dateDevolution = new Date(devolutionDate);
  const today = new Date();

  const dateDevolutionFormat = format(dateDevolution, 'dd-MM-yyyy');
  const lendDateFormat = format(lendDateData, 'dd-MM-yyyy');

  const isBookLate = isAfter(today, dateDevolution);

  function handleModal() {
    setmodalImageBorrowedCards(!modalImageBorrowedCards);
  }

  function handleRating(e) {
    console.log(e);
  }

  return (
    <>
      <BorrowedBookCard isBookLate={isBookLate}>
        <ContainerTitle isBookLate={isBookLate}>
          <div className="div_img" onClick={handleModal}>
            <img src={image} alt="Cover Book" title="Book Cover" loading="lazy" />
            <ModalImage image={image} isOpen={modalImageBorrowedCards} setmodalImage={handleModal} />
          </div>

          <div className="div_bookname_and_rating">
            <div className="div_title">
              <h3 title="Book Name">{bookName}</h3>
            </div>
            <div className="div_rating" title="Rating">
              <ReactStars
                count={5}
                size={18}
                value={rating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffff00"
                onChange={(e) => handleRating(e)}
              />
            </div>
          </div>
        </ContainerTitle>
        <ContainerResume isBookLate={isBookLate}>
          <div className="div_resume">
            <p>{resume}</p>
          </div>
          <DivInfoLendBook isBookLate={isBookLate}>
            <p>
              Este livro foi emprestado no dia {lendDateFormat}, com devolução para o dia {dateDevolutionFormat},
              portanto, está
              {isBookLate ? ' atrasado.' : ' dentro do prazo.'}
            </p>
          </DivInfoLendBook>
        </ContainerResume>
        <ContainerActions isBookLate={isBookLate}>
          <Icon />
        </ContainerActions>
      </BorrowedBookCard>
    </>
  );
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default memo(Borrowedbookscard);
