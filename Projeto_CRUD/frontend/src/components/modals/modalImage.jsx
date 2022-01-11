import React, { memo } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import { Image } from './styleds/styled';

const ModalImage = ({ image, isOpen, setmodalImage }) => {
  function closeModal() {
    setmodalImage(false);
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
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      border: 'none',
      backgroundColor: 'transparent',
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
        <Image loading="lazy" title="Book cover" src={image} alt="Book cover" />
      </Modal>
    </>
  );
};

ModalImage.propTypes = {
  image: propTypes.any,
  isOpen: propTypes.bool,
  setmodalImage: propTypes.func,
};

export default memo(ModalImage);
