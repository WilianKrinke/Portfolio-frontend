import propTypes from 'prop-types';
import React, { memo } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import translate from '../../i18n/translate';
import returnBook from '../../utils/returnBooks/returnTheBook';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { DivModalReturnBook, P, SubDivModal } from './styleds/styled';

const ModalReturnBookBorrowedCard = ({ isOpen, setModalReturnBook, bookName, objectDatas }) => {
    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    async function handleReturnBook() {
        try {
            const response = await returnBook(objectDatas);
            response === false && tokenTimeOut(navigate);

            const { isReturnTheBook } = response;

            if (isReturnTheBook === true) {
                setModalReturnBook(false);
                window.location.reload();
            } else {
                throw new Error('Client Error - handleReturnBook');
            }
        } catch (error) {
            navigate(`/error-page/${error.message}`);
        }
    }

    function closeModal() {
        setModalReturnBook(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItens: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5.9px)',
        },
    };

    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Confirmed Modal"
            >
                <DivModalReturnBook $darkmode={darkMode}>
                    <SubDivModal $darkmode={darkMode}>
                        <div className="disclaimer_lend_book" title="Disclaimer">
                            <P $darkmode={darkMode}>
                                {translate('returnbookinfo')} <b>{translate('returnbookname', { bookName })}</b>?
                            </P>
                        </div>
                        <div className="container_buttons_lend_book">
                            <ButtonConfirmedLoanBook $darkmode={darkMode} title="Confirm" onClick={handleReturnBook}>
                                {translate('confirm')}
                            </ButtonConfirmedLoanBook>
                            <ButtonCancelLoanBook $darkmode={darkMode} onClick={closeModal} title="Cancel">
                                {translate('cancel')}
                            </ButtonCancelLoanBook>
                        </div>
                    </SubDivModal>
                </DivModalReturnBook>
            </Modal>
        </>
    );
};

ModalReturnBookBorrowedCard.propTypes = {
    isOpen: propTypes.bool,
    setModalReturnBook: propTypes.func,
    bookName: propTypes.string,
    objectDatas: propTypes.object,
};

export default memo(ModalReturnBookBorrowedCard);
