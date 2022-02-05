import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Borrowedbookscard from '../../components/borrowedBooksCard/borrowedBooksCard';
import Letterfooter from '../../components/letterFooter/letterFooter.jsx';
import Letterheader from '../../components/letterHeader/letterHeader.jsx';
import Loading from '../../components/loading/Loading';
import Lottienodata from '../../components/lottieAnimations/lottieNoData.jsx';
import Menu from '../../components/menu/Menu';
import Scrolltotop from '../../components/scrollToTop/scrollToTop.jsx';
import getMyBorrowedBooks from '../../utils/getMyBorrowedBooks/getMyBorrowedBooks';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { BorrowMain, SectionContainer } from './styled';

const MyBorrowedBooks = () => {
    const [userNameState, setUserNameState] = useState('');
    const [borrowedBooks, setBorrowedBooks] = useState();
    const [loadingState, setloadingState] = useState(true);
    const [noBookData, setNoBookData] = useState(false);

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await getMyBorrowedBooks();

                if (response === false) {
                    tokenTimeOut(navigate);
                } else {
                    const { userName, responseObject } = response;
                    setUserNameState(userName);

                    if (responseObject.length === 0) {
                        setNoBookData(true);
                    }

                    setBorrowedBooks(responseObject);
                    setloadingState(false);
                }
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
                    <Menu user={userNameState} />
                    <Letterheader phrase="My Borrowed Books" />
                    <BorrowMain $darkmode={darkMode}>
                        <SectionContainer>
                            {noBookData ? (
                                <Lottienodata word="Borrowings" />
                            ) : (
                                borrowedBooks.map((item) => {
                                    return <Borrowedbookscard key={item.idlendRegister} infoDatas={item} />;
                                })
                            )}
                        </SectionContainer>
                        <Scrolltotop />
                    </BorrowMain>
                    <Letterfooter />
                </>
            )}
        </>
    );
};

export default MyBorrowedBooks;
