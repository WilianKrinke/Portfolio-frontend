/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';
import React, { memo, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import lendBook from '../../utils/lendBooks/lendBook';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import Lendbookbox from '../InfoBoxes/LendbookBox';
import Warningbox from '../InfoBoxes/WarningBox';
import { DivModal } from './styleds/styled';

const ModalLendBook = ({
    modalLendBookIsOpen,
    setmodalLendBookIsOpen,
    setmodalReturnBook,
    setamountState,
    setisLend,
    userAndBookDatas,
    bookInfo,
}) => {
    const [indexSelected, setIndexSelected] = useState(0);

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

    const objectLendBookBox = {
        bookName,
        handleLend,
        closeModal,
    };

    const teste = [Warningbox(objectLendBookBox), Lendbookbox(objectLendBookBox)];

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

    function handleDecrementIndex() {
        if (indexSelected === 0) {
            setIndexSelected(1);
        } else {
            setIndexSelected((current) => current - 1);
        }
    }

    function handleIncrementIndex() {
        if (indexSelected === teste.length - 1) {
            setIndexSelected(0);
        } else {
            setIndexSelected((curr) => curr + 1);
        }
    }

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
                    {teste[indexSelected]}
                    <div className="div_steps">
                        <p onClick={handleDecrementIndex}>Anterior</p>
                        <p onClick={handleIncrementIndex}>Proximo</p>
                    </div>
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
