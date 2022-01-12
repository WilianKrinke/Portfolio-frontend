/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle, DivInfoLendBook, Icon } from './styled';
import { format } from 'date-fns';
import ModalImage from '../modals/modalImage';
import ModalReturnBookBorrowedCard from '../modals/modalReturnBookBorrowedCard';
import isLate from '../../utils/validations/dateValidation';
import sameDateValidation from '../../utils/validations/sameDateValidation';

const Borrowedbookscard = ({ infoDatas }) => {
  const [modalImageBorrowedCards, setmodalImageBorrowedCards] = useState(false);
  const [modalReturnBook, setModalReturnBook] = useState(false);

  const { image, bookName, resume, devolutionDate, lendDate } = infoDatas;

  const lendDateData = new Date(lendDate);
  const dateDevolution = new Date(devolutionDate);
  const today = new Date();

  const dateDevolutionFormat = format(dateDevolution, 'dd-MM-yyyy');
  const lendDateFormat = format(lendDateData, 'dd-MM-yyyy');
  const todayFormat = format(today, 'dd-MM-yyyy');

  const isBookLate = isLate(todayFormat, dateDevolutionFormat);
  const isSameDate = sameDateValidation(todayFormat, dateDevolutionFormat);

  function handleModal() {
    setmodalImageBorrowedCards(!modalImageBorrowedCards);
  }

  function handleModalReturnBook() {
    setModalReturnBook(!modalReturnBook);
  }

  return (
    <>
      <BorrowedBookCard isBookLate={isBookLate} isSameDate={isSameDate}>
        <ContainerTitle isBookLate={isBookLate} isSameDate={isSameDate}>
          <div className="div_img" onClick={handleModal}>
            <img src={image} alt="Cover Book" title="Book Cover" loading="lazy" />
          </div>

          <div className="div_bookname_and_rating">
            <div className="div_title">
              <h3 title="Book Title">{bookName}</h3>
            </div>
          </div>
        </ContainerTitle>
        <ContainerResume isBookLate={isBookLate} isSameDate={isSameDate}>
          <div className="div_resume" title="Resume">
            <p>{resume}</p>
          </div>
          <DivInfoLendBook isBookLate={isBookLate} isSameDate={isSameDate} title="Loan Information">
            <p>
              This book was borrowed on {lendDateFormat}, with return on {dateDevolutionFormat},
              {isSameDate
                ? " so don't forget, today is the day to deliver it."
                : isBookLate
                ? " therefore, you're late..."
                : ' therefore, is within the deadline.'}
            </p>
          </DivInfoLendBook>
        </ContainerResume>
        <ContainerActions isBookLate={isBookLate} isSameDate={isSameDate}>
          <Icon title="Return Book" onClick={handleModalReturnBook} />
          <p>Return book</p>
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
