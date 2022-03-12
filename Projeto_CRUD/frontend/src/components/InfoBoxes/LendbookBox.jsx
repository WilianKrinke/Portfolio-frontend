import { addBusinessDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import translate from '../../i18n/translate';
import { ButtonCancelLoanBook, ButtonConfirmedLoanBook } from '../Buttons';
import { P, SubDivModal } from './styled/styled';

const Lendbookbox = (objectLendBookBox) => {
    const { bookName, handleLend, closeModal } = objectLendBookBox;
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const today = format(new Date(), 'dd-MM-yyyy', { locale: ptBR });
    const threeDaysBusinessAfter = format(addBusinessDays(new Date(), 3), 'dd-MM-yyyy');

    return (
        <SubDivModal $darkmode={darkMode}>
            <div className="disclaimer_lend_book" title="Disclaimer">
                <P $darkmode={darkMode}>
                    {translate('loaninfo1')}
                    <b>{translate('loaninfo2', { bookName })}</b>
                    {translate('loaninfo3')}
                    <b>{translate('loaninfo4', { today })}</b>
                    {translate('loaninfo5')}
                    <b>{translate('loaninfo6', { threeDaysBusinessAfter })}</b>?
                </P>
            </div>
            <div className="container_buttons_lend_book">
                <ButtonCancelLoanBook onClick={closeModal} title="Cancel" $darkmode={darkMode}>
                    {translate('cancel')}
                </ButtonCancelLoanBook>
                <ButtonConfirmedLoanBook onClick={handleLend} title="Confirm" $darkmode={darkMode}>
                    {translate('confirm')}
                </ButtonConfirmedLoanBook>
            </div>
        </SubDivModal>
    );
};

Lendbookbox.propTypes = {
    objectLendBookBox: propTypes.object,
};

export default Lendbookbox;
