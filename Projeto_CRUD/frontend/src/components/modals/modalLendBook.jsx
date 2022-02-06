/* eslint-disable no-unused-vars */
import { addBusinessDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import propTypes from 'prop-types';
import React, { memo } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import lendBook from '../../utils/lendBooks/lendBook';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { DivModal, P, SubDivModal } from './styleds/styled';

const ModalLendBook = ({
    modalLendBookIsOpen,
    setmodalLendBookIsOpen,
    setmodalReturnBook,
    setamountState,
    setisLend,
    userAndBookDatas,
    bookInfo,
}) => {
    const navigate = useNavigate();

    const objectDatas = {
        ...userAndBookDatas,
        ...bookInfo,
    };

    const { bookName } = bookInfo;
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    async function handleLend() {
        try {
            const response = await lendBook(objectDatas);
            if (response === false) {
                tokenTimeOut(navigate);
            }

            const { isRegister } = response;

            if (isRegister === true) {
                toast.success('Successfully borrowed book!');
                setmodalLendBookIsOpen(false);
                setamountState((currentstate) => currentstate - 1);
            } else {
                throw new Error('Client Error - handleLend');
            }
        } catch (error) {
            navigate(`/error-page/${error.message}`);
        }
    }

    function closeModal() {
        setisLend(false);
        setmodalLendBookIsOpen(false);
        setmodalReturnBook(false);
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

    const today = format(new Date(), 'dd-MM-yyyy', { locale: ptBR });
    const threeDaysBusinessAfter = format(addBusinessDays(new Date(), 1), 'dd-MM-yyyy');

    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={modalLendBookIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Confirmed Modal"
            >
                <DivModal $darkmode={darkMode}>
                    <SubDivModal $darkmode={darkMode}>
                        <div className="disclaimer_lend_book" title="Disclaimer">
                            <P $darkmode={darkMode}>
                                Do you confirm the loan of the book <b>&quot;{bookName}&quot;</b> on the <b>{today}</b>{' '}
                                with the return for the <b>{threeDaysBusinessAfter}</b>?
                            </P>
                        </div>
                        <div className="container_buttons_lend_book">
                            <ButtonConfirmedLoanBook onClick={handleLend} title="Confirm" $darkmode={darkMode}>
                                Confirm
                            </ButtonConfirmedLoanBook>
                            <ButtonCancelLoanBook onClick={closeModal} title="Cancel" $darkmode={darkMode}>
                                Cancel
                            </ButtonCancelLoanBook>
                        </div>
                    </SubDivModal>
                </DivModal>
            </Modal>
        </>
    );
};

ModalLendBook.propTypes = {
    modalLendBookIsOpen: propTypes.bool,
    setmodalLendBookIsOpen: propTypes.func,
    setmodalReturnBook: propTypes.func,
    setisLend: propTypes.func,
    setamountState: propTypes.func,
    userAndBookDatas: propTypes.object,
    bookInfo: propTypes.object,
};

export default memo(ModalLendBook);
