import React from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import lendBook from '../../utils/lendBooks/lendBook';
import { toast } from 'react-toastify';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { DivModal } from './styleds/styled';
import { format, addBusinessDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const ModalLendBook = ({
  modalLendBookIsOpen,
  setmodalLendBookIsOpen,
  setmodalReturnBook,
  bookName,
  objectDatas,
  setisLend,
}) => {
  //
  async function handleLend() {
    try {
      const response = await lendBook(objectDatas);
      const { isRegister } = response;

      if (isRegister === true) {
        toast.success('Successfully borrowed book!');
        setmodalLendBookIsOpen(false);
      } else {
        toast.warn('Something is wrong, contact the administrator');
      }
    } catch (error) {
      toast.warn('Your session has expired or some error has occurred');
      console.log(error);
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
  const threeDaysBusinessAfter = format(addBusinessDays(new Date(), 3), 'dd-MM-yyyy');

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={modalLendBookIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirmed Modal"
      >
        <DivModal>
          <div className="disclaimer_lend_book" title="Disclaimer">
            <p>
              Do you confirm the loan of the book <strong>&quot;{bookName}&quot;</strong> on the{' '}
              <strong>{today}</strong> with the return for the <strong>{threeDaysBusinessAfter}</strong>?
            </p>
          </div>
          <div className="container_buttons_lend_book">
            <ButtonConfirmedLoanBook onClick={handleLend} title="Confirm">
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

ModalLendBook.propTypes = {
  modalLendBookIsOpen: propTypes.bool,
  setmodalLendBookIsOpen: propTypes.func,
  setmodalReturnBook: propTypes.func,
  bookName: propTypes.string,
  objectDatas: propTypes.object,
  setisLend: propTypes.func,
};

export default ModalLendBook;
