import React, { memo, useState } from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle, DivInfoLendBook, Icon } from './styled';
import { format, isAfter } from 'date-fns';
import ModalImage from '../modals/modalImage';
import ModalReturnBookBorrowedCard from '../modals/modalReturnBookBorrowedCard';

const Borrowedbookscard = ({ infoDatas }) => {
  const [modalImageBorrowedCards, setmodalImageBorrowedCards] = useState(false);
  const [modalReturnBook, setModalReturnBook] = useState(false);

  const { image, bookName, resume, devolutionDate, lendDate } = infoDatas;

  const lendDateData = new Date(lendDate);
  const dateDevolution = new Date(devolutionDate);
  const today = new Date();

  const dateDevolutionFormat = format(dateDevolution, 'dd-MM-yyyy');
  const lendDateFormat = format(lendDateData, 'dd-MM-yyyy');

  const isBookLate = isAfter(today, dateDevolution);

  function handleModal() {
    setmodalImageBorrowedCards(!modalImageBorrowedCards);
  }

  function handleModalReturnBook() {
    setModalReturnBook(!modalReturnBook);
  }

  return (
    <>
      <BorrowedBookCard isBookLate={isBookLate}>
        <ContainerTitle isBookLate={isBookLate}>
          <div className="div_img" onClick={handleModal}>
            <img src={image} alt="Cover Book" title="Book Cover" loading="lazy" />
          </div>

          <div className="div_bookname_and_rating">
            <div className="div_title">
              <h3 title="Book Name">{bookName}</h3>
            </div>
          </div>
        </ContainerTitle>
        <ContainerResume isBookLate={isBookLate}>
          <div className="div_resume" title="Resume">
            <p>{resume}</p>
          </div>
          <DivInfoLendBook isBookLate={isBookLate} title="Loan Information">
            <p>
              Este livro foi emprestado no dia {lendDateFormat}, com devolução para o dia {dateDevolutionFormat},
              portanto, está
              {isBookLate ? ' atrasado.' : ' dentro do prazo.'}
            </p>
          </DivInfoLendBook>
        </ContainerResume>
        <ContainerActions isBookLate={isBookLate}>
          <Icon title="Return Book" onClick={handleModalReturnBook} />
        </ContainerActions>
      </BorrowedBookCard>

      <ModalImage image={image} isOpen={modalImageBorrowedCards} setmodalImage={handleModal} />

      <ModalReturnBookBorrowedCard
        isOpen={modalReturnBook}
        setModalReturnBook={handleModalReturnBook}
        bookName={bookName}
        objectDatas={infoDatas}
      />
    </>
  );
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default memo(Borrowedbookscard);
