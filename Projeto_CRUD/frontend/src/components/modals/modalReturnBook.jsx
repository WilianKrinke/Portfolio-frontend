import React, { memo } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import returnBook from '../../utils/returnBooks/returnTheBook';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { toast } from 'react-toastify';
import { DivModal, SubDivModal } from './styleds/styled';
import { useNavigate } from 'react-router-dom';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';

const ModalReturnBook = ({
  modalReturnBook,
  setmodalLendBookIsOpen,
  setmodalReturnBook,
  setisLend,
  setamountState,
  userAndBookDatas,
  bookInfo,
}) => {
  const navigate = useNavigate();

  const objectDatas = {
    ...userAndBookDatas,
    ...bookInfo,
  };

  const { bookName } = bookInfo;

  async function handleReturnBook() {
    try {
      const response = await returnBook(objectDatas);
      if (response === false) {
        tokenTimeOut(navigate);
      }

      const { isReturnTheBook } = response;

      if (isReturnTheBook === true) {
        toast.success('Successfully returned the book!');
        setmodalReturnBook(false);
        setamountState((currentState) => currentState + 1);
      } else {
        throw new Error('Client Error - handleReturnBook');
      }
    } catch (error) {
      console.log(error);
      //para a página de erro
    }
  }

  function closeModal() {
    setisLend(true);
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

ModalReturnBook.propTypes = {
  modalReturnBook: propTypes.bool,
  setmodalLendBookIsOpen: propTypes.func,
  setmodalReturnBook: propTypes.func,
  setisLend: propTypes.func,
  setamountState: propTypes.func,
  userAndBookDatas: propTypes.object,
  bookInfo: propTypes.object,
};

export default memo(ModalReturnBook);
