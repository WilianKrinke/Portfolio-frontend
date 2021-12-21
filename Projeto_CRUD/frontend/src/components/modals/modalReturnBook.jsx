import React from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { toast } from 'react-toastify';
import { DivModal } from './styleds/styled';
import returnBook from '../../utils/returnBooks/returnTheBook';

const ModalReturnBook = ({
  modalReturnBook,
  setmodalLendBookIsOpen,
  setmodalReturnBook,
  setisLend,
  bookName,
  objectDatas,
}) => {
  //
  async function handleReturnBook() {
    try {
      setisLend(false);
      const response = await returnBook(objectDatas);
      const { isReturnTheBook } = response.data;

      if (isReturnTheBook == true) {
        toast.success('Successfully returned the book!');
        setmodalReturnBook(false);
      } else {
        setmodalReturnBook(false);
        setisLend(true);
        toast.warn('Something is wrong, contact the administrator');
      }
    } catch (error) {
      setisLend(true);
      toast.warn('Your session has expired or some error has occurred');
      console.log(error);
    }
  }

  function closeModal() {
    setmodalLendBookIsOpen(false);
    setmodalReturnBook(false);
    setisLend(false);
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
        isOpen={modalReturnBook}
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

ModalReturnBook.propTypes = {
  modalReturnBook: propTypes.bool,
  setmodalLendBookIsOpen: propTypes.func,
  setmodalReturnBook: propTypes.func,
  setisLend: propTypes.func,
  bookName: propTypes.string,
  objectDatas: propTypes.object,
};

export default ModalReturnBook;
