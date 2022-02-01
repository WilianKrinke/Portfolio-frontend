import React, { useEffect, useState } from 'react';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import LottieNoData from '../../components/lottieAnimations/lottieNoData';
import Menu from '../../components/menu/Menu.jsx';
import getFavorites from '../../utils/getFavorites/getFavorites';
import { FavoriteMain, SectionContainer } from './styled';
import { useNavigate } from 'react-router-dom';
import Favoritecard from '../../components/favoriteCard/favoriteCard.jsx';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { DivLoading } from '../../components/loading/DivLoading';

const Myfavorites = () => {
  const [userNameState, setUserNameState] = useState('');
  const [loadingState, setloadingState] = useState(true);
  const [noBookData, setNoBookData] = useState(false);
  const [bookFavorites, setBookFavorites] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getFavorites();
        const { userName, responseObject } = response;

        if (response === false) {
          tokenTimeOut(navigate);
        } else {
          setUserNameState(userName);

          if (responseObject.length === 0) {
            setNoBookData(true);
          } else {
            setBookFavorites(responseObject);
          }

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
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <Menu user={userNameState} />
          <Letterheader phrase="My Favorites" />
          <FavoriteMain>
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
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default Myfavorites;
