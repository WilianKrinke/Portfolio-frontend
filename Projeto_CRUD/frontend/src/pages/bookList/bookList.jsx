import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Ajustbooklist from '../../components/ajustBookList/ajustBookList';
import Bookcard from '../../components/bookCard/bookCard.jsx';
import Letterfooter from '../../components/letterFooter/letterFooter.jsx';
import Letterheader from '../../components/letterHeader/letterHeader.jsx';
import Loading from '../../components/loading/Loading.jsx';
import Menu from '../../components/menu/Menu';
import Scrolltotop from '../../components/scrollToTop/scrollToTop.jsx';
import getBookList from '../../utils/getBookList/getBookList';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { BookArticle, BookListArticle, BookListMain, BookListSection } from './styled';

const BookList = () => {
    const [category, setCategory] = useState('all');
    const [itensPerPage, setItensPerPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItens, setcurrentItens] = useState([]);
    const [userIdData, setUserIdData] = useState(null);
    const [userName, setUserName] = useState('');
    const [fadeIn, setfadeIn] = useState(false);
    const [loadingState, setloadingState] = useState(true);

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const navigate = useNavigate();
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;

    useEffect(() => {
        (async () => {
            try {
                const response = await getBookList(category);
                if (response === false) {
                    tokenTimeOut(navigate);
                } else {
                    const { responseBooks, userName, idUser } = response;
                    setUserName(userName);
                    setUserIdData(idUser);
                    setPages(Math.ceil(responseBooks.length / itensPerPage));
                    setcurrentItens(responseBooks.slice(startIndex, endIndex));
                    setloadingState(false);
                    setTimeout(() => {
                        setfadeIn(true);
                    }, 1);
                }
            } catch (error) {
                navigate(`/error-page/${error.message}`);
            }
        })();
    }, [itensPerPage, startIndex, endIndex, category]);

    function accCurrentPage() {
        setCurrentPage(currentPage + 1);

        if (currentPage >= pages - 1) {
            setCurrentPage(0);
        }
    }

    function decCurrentPage() {
        setCurrentPage(currentPage - 1);

        if (currentPage <= 0) {
            setCurrentPage(pages - 1);
        }
    }

    return (
        <>
            {loadingState ? (
                <Loading />
            ) : (
                <>
                    <Menu user={userName} />
                    <Letterheader phrase="Book List" />
                    <BookListMain $darkmode={darkMode}>
                        <BookListSection>
                            <BookArticle fadeIn={fadeIn}>
                                <Ajustbooklist
                                    decCurrentPage={decCurrentPage}
                                    currentPage={currentPage}
                                    pages={pages}
                                    accCurrentPage={accCurrentPage}
                                    setItensPerPage={setItensPerPage}
                                    setCategory={setCategory}
                                />
                                <BookListArticle>
                                    {currentItens.map((item) => {
                                        return (
                                            <Bookcard
                                                key={item.idBook}
                                                idUser={userIdData}
                                                userName={userName}
                                                bookInfo={item}
                                            />
                                        );
                                    })}
                                </BookListArticle>
                                <Ajustbooklist
                                    decCurrentPage={decCurrentPage}
                                    currentPage={currentPage}
                                    pages={pages}
                                    accCurrentPage={accCurrentPage}
                                    setItensPerPage={setItensPerPage}
                                    setCategory={setCategory}
                                />
                            </BookArticle>
                        </BookListSection>
                        <Scrolltotop />
                    </BookListMain>
                    <Letterfooter />
                </>
            )}
        </>
    );
};

export default BookList;
