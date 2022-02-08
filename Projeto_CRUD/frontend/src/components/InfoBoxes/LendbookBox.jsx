import { addBusinessDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { P, SubDivModal } from './styled/styled';

const Lendbookbox = (objectLendBookBox) => {
    const { bookName, handleLend, closeModal } = objectLendBookBox;
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const today = format(new Date(), 'dd-MM-yyyy', { locale: ptBR });
    const threeDaysBusinessAfter = format(addBusinessDays(new Date(), 1), 'dd-MM-yyyy');

    return (
        <SubDivModal $darkmode={darkMode}>
            <div className="disclaimer_lend_book" title="Disclaimer">
                <P $darkmode={darkMode}>
                    Do you confirm the loan of the book <b>&quot;{bookName}&quot;</b> on the <b>{today}</b> with the
                    return for the <b>{threeDaysBusinessAfter}</b>?
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
    );
};

Lendbookbox.propTypes = {
    objectLendBookBox: propTypes.object,
};

export default Lendbookbox;
