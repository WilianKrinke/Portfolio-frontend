import { format } from 'date-fns';
import propTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';
import applyUserPenalty from '../../utils/applyUserPenalty/applyUserPenalty';
import isLate from '../../utils/validations/dateValidation';
import sameDateValidation from '../../utils/validations/sameDateValidation';
import ModalImage from '../modals/modalImage';
import ModalReturnBookBorrowedCard from '../modals/modalReturnBookBorrowedCard';
import {
    BorrowedBookCard,
    ContainerActions,
    ContainerResume,
    ContainerTitle,
    DivInfoLendBook,
    H3,
    Icon,
    P,
} from './styled';

const Borrowedbookscard = ({ infoDatas }) => {
    const [modalImageBorrowedCards, setmodalImageBorrowedCards] = useState(false);
    const [modalReturnBook, setModalReturnBook] = useState(false);

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const { image, bookName, resume, devolutionDate, lendDate, rating } = infoDatas;

    const lendDateData = new Date(lendDate);
    const dateDevolution = new Date(devolutionDate);
    const today = new Date();

    const dateDevolutionFormat = format(dateDevolution, 'dd-MM-yyyy');
    const lendDateFormat = format(lendDateData, 'dd-MM-yyyy');
    const todayFormat = format(today, 'dd-MM-yyyy');

    const isBookLate = isLate(todayFormat, dateDevolutionFormat);
    const isSameDate = sameDateValidation(todayFormat, dateDevolutionFormat);

    useEffect(() => {
        isBookLate && applyUserPenalty();
    }, [isBookLate]);

    function handleModal() {
        setmodalImageBorrowedCards(!modalImageBorrowedCards);
    }

    function handleModalReturnBook() {
        setModalReturnBook(!modalReturnBook);
    }

    return (
        <>
            <BorrowedBookCard isBookLate={isBookLate} isSameDate={isSameDate} $darkmode={darkMode}>
                <ContainerTitle isBookLate={isBookLate} isSameDate={isSameDate}>
                    <div className="div_img" onClick={handleModal}>
                        <img src={image} alt="Cover Book" title="Book Cover" loading="lazy" />
                    </div>

                    <div className="div_bookname_and_rating">
                        <div className="div_title">
                            <H3 title="Book Title" $darkmode={darkMode}>
                                {bookName}
                            </H3>
                        </div>
                        <div className="div_rating" title={`Rating ${rating}`}>
                            <ReactStars
                                count={5}
                                size={18}
                                value={rating}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                edit={false}
                                title="Read Only"
                            />
                        </div>
                    </div>
                </ContainerTitle>
                <ContainerResume isBookLate={isBookLate} isSameDate={isSameDate} $darkmode={darkMode}>
                    <div className="div_resume" title="Resume">
                        <P $darkmode={darkMode}>{resume}</P>
                    </div>
                    <DivInfoLendBook
                        isBookLate={isBookLate}
                        isSameDate={isSameDate}
                        title="Loan Information"
                        $darkmode={darkMode}
                    >
                        <P $darkmode={darkMode}>
                            This book was borrowed on {lendDateFormat}, with return on {dateDevolutionFormat}.
                        </P>
                        <P $darkmode={darkMode}>
                            {isSameDate
                                ? 'Today is book delivery day.'
                                : isBookLate
                                ? 'This book is late.'
                                : 'This book is on time.'}
                        </P>
                    </DivInfoLendBook>
                </ContainerResume>
                <ContainerActions isBookLate={isBookLate} isSameDate={isSameDate} onClick={handleModalReturnBook}>
                    <div className="div_container_icon">
                        <Icon $darkmode={darkMode} title="Return Book" />
                        <P $darkmode={darkMode}>Return book</P>
                    </div>
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
