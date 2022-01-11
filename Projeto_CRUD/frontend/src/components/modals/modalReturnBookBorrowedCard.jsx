import React from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import returnBook from '../../utils/returnBooks/returnTheBook';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { toast } from 'react-toastify';
import { DivModal } from './styleds/styled';
import { useNavigate } from 'react-router-dom';

const ModalReturnBookBorrowedCard = ({ isOpen, setModalReturnBook, bookName, objectDatas }) => {
  const navigate = useNavigate();

  async function handleReturnBook() {
    try {
      console.log(objectDatas);
      const response = await returnBook(objectDatas);

      console.log(response);

      if (response === false) {
        toast.warn('Token time expired, please re-login');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
      const { isReturnTheBook } = response;
      if (isReturnTheBook === true) {
        toast.success('Successfully returned the book!');
        setModalReturnBook(false);
        window.location.reload();
      } else {
        toast.warn('Something is wrong, contact the administrator');
      }
    } catch (error) {
      console.log(error);
      //para a página de erro
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
      backgroundColor: '#F9FFF9',
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

export default ModalReturnBookBorrowedCard;
