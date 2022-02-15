import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Favoritecard from '../../components/favoriteCard/favoriteCard.jsx';
import InternalFooter from '../../components/footer/InternalFooter.jsx';
import HeaderComponent from '../../components/header/HeaderComponent.jsx';
import Loading from '../../components/loading/Loading';
import LottieNoData from '../../components/lottieAnimations/lottieNoData';
import Menu from '../../components/menu/Menu.jsx';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import getFavorites from '../../utils/getFavorites/getFavorites';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { FavoriteMain, SectionContainer } from './styled';

const Myfavorites = () => {
    const [userNameState, setUserNameState] = useState('');
    const [loadingState, setloadingState] = useState(true);
    const [noBookData, setNoBookData] = useState(false);
    const [bookFavorites, setBookFavorites] = useState();

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await getFavorites();
                const { userName, responseObject } = response;
                response === false && tokenTimeOut();

                setUserNameState(userName);

                if (responseObject.length === 0) {
                    setNoBookData(true);
                } else {
                    setBookFavorites(responseObject);
                }

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
                    <Menu user={userNameState} />
                    <HeaderComponent phrase="My Favorites" />
                    <FavoriteMain $darkmode={darkMode}>
                        <SectionContainer>
                            {noBookData ? (
                                <LottieNoData word="Favorites" />
                            ) : (
                                <>
                                    {bookFavorites.map((item) => {
                                        return <Favoritecard key={item.idFavoriteRegister} favoriteItem={item} />;
                                    })}
                                </>
                            )}
                        </SectionContainer>
                        <ScrollToTop />
                    </FavoriteMain>
                    <InternalFooter />
                </>
            )}
        </>
    );
};

export default Myfavorites;
