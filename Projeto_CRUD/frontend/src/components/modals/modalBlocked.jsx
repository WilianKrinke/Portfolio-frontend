import React from 'react';
import Modal from 'react-modal';

const Modalblocked = () => {
    const customStyles = {
        content: {
            position: 'fixed',
            zIndex: '90',
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
            position: 'fixed',
        },
    };

    return (
        <>
            <Modal ariaHideApp={false} style={customStyles} contentLabel="Confirmed Modal"></Modal>
        </>
    );
};

export default Modalblocked;
