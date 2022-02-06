import propTypes from 'prop-types';
import React, { memo } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import returnBook from '../../utils/returnBooks/returnTheBook';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { DivModal, P, SubDivModal } from './styleds/styled';

const ModalReturnBookBorrowedCard = ({ isOpen, setModalReturnBook, bookName, objectDatas }) => {
    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    async function handleReturnBook() {
        try {
            const response = await returnBook(objectDatas);
            if (response === false) {
                tokenTimeOut(navigate);
            }

            const { isReturnTheBook } = response;
            if (isReturnTheBook === true) {
                toast.success('Successfully returned the book!');
                setModalReturnBook(false);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
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
                <DivModal $darkmode={darkMode}>
                    <SubDivModal $darkmode={darkMode}>
                        <div className="disclaimer_lend_book" title="Disclaimer">
                            <P $darkmode={darkMode}>
                                Do you confirm returning the book <b>&quot;{bookName}&quot;</b>?
                            </P>
                        </div>
                        <div className="container_buttons_lend_book">
                            <ButtonConfirmedLoanBook $darkmode={darkMode} title="Confirm" onClick={handleReturnBook}>
                                Confirm
                            </ButtonConfirmedLoanBook>
                            <ButtonCancelLoanBook $darkmode={darkMode} onClick={closeModal} title="Cancel">
                                Cancel
                            </ButtonCancelLoanBook>
                        </div>
                    </SubDivModal>
                </DivModal>
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
