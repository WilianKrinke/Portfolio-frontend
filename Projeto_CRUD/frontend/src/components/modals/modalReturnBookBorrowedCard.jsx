import React, { memo } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import returnBook from '../../utils/returnBooks/returnTheBook';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { toast } from 'react-toastify';
import { DivModal, SubDivModal } from './styleds/styled';
import { useNavigate } from 'react-router-dom';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';

const ModalReturnBookBorrowedCard = ({ isOpen, setModalReturnBook, bookName, objectDatas }) => {
  const navigate = useNavigate();

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
        <DivModal>
          <SubDivModal>
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
