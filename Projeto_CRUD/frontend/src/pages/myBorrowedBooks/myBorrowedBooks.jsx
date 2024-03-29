import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Borrowedbookscard from '../../components/borrowedBooksCard/borrowedBooksCard';
import InternalFooter from '../../components/footer/InternalFooter';
import HeaderComponent from '../../components/header/HeaderComponent';
import Loading from '../../components/loading/Loading';
import Lottienodata from '../../components/lottieAnimations/lottieNoData.jsx';
import Menu from '../../components/menu/Menu';
import Scrolltotop from '../../components/scrollToTop/scrollToTop.jsx';
import translate from '../../i18n/translate';
import getMyBorrowedBooks from '../../utils/getMyBorrowedBooks/getMyBorrowedBooks';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { BorrowMain, SectionContainer } from './styled';

const MyBorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState();
    const [loadingState, setloadingState] = useState(true);
    const [noBookData, setNoBookData] = useState(false);

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await getMyBorrowedBooks();
                response === false && tokenTimeOut();

                const { responseObject } = response;

                if (responseObject.length === 0) {
                    setNoBookData(true);
                }

                setBorrowedBooks(responseObject);
                setloadingState(false);
            } catch (error) {
                navigate(`/error-page/${error.message}`);
            }
        })();
    }, []);

    return (
        <>
            {loadingState ? (
                <Loading />
            ) : (
                <>
                    <Menu />
                    <HeaderComponent phrase={translate('borrowedBooksTitle')} />
                    <BorrowMain $darkmode={darkMode}>
                        <SectionContainer>
                            {noBookData ? (
                                <Lottienodata word={translate('borrowings')} />
                            ) : (
                                borrowedBooks.map((item) => {
                                    return <Borrowedbookscard key={item.idlendRegister} infoDatas={item} />;
                                })
                            )}
                        </SectionContainer>
                        <Scrolltotop />
                    </BorrowMain>
                    <InternalFooter />
                </>
            )}
        </>
    );
};

export default MyBorrowedBooks;
