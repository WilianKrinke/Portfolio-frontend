/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import LottieNoData from '../../components/lottieAnimations/lottieNoData';
import preAuth from '../../utils/Auth/preAuth';
import Menu from '../../components/menu/Menu.jsx';
import { DivLoading, MainStyled } from '../../primeComponents';
import getFavorites from '../../utils/getFavorites/getFavorites';
import { SectionContainer } from './styled';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Favoritecard from '../../components/favoriteCard/favoriteCard';

const Myfavorites = () => {
  const [userNameState, setUserNameState] = useState('');
  const [loadingState, setloadingState] = useState(true);
  const [noBookData, setNoBookData] = useState(false);
  const [bookFavorites, setBookFavorites] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        preAuth();
        const response = await getFavorites();
        const { userName, responseObject } = response;
        console.log(responseObject);

        if (response === false) {
          toast.warn('Token time expired, please re-login');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else if (response === null) {
          //Enviar para pagina de erro
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
        console.log(error);
        //Enviar para página de erro
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
          <MainStyled>
            <SectionContainer>
              {noBookData ? (
                <LottieNoData />
              ) : (
                <>
                  {bookFavorites.map((item) => {
                    return <Favoritecard key={item.idFavoriteRegister} favoriteItem={item} />;
                  })}
                </>
              )}
            </SectionContainer>
          </MainStyled>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default Myfavorites;
