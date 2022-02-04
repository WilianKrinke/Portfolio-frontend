/* eslint-disable no-unused-vars */
import React, { useEffect, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import DataTabs from '../../components/dataTab/dataTab';
import { ArticleContainer, MyDataMain, SectionContainer } from './styled';
import { DivLoading } from '../../components/loading/DivLoading';
import { useSelector } from 'react-redux';

const Mydata = () => {
  const navigate = useNavigate();

  const [userNameState, setuserNameState] = useState('');
  const [loadingState, setloadingState] = useState(true);
  const [userDatasObject, setUserDatasObject] = useState();

  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyDatas();

        if (response === false) {
          tokenTimeOut(navigate);
        } else {
          const { userName, userDatas } = response;

          setuserNameState(userName);
          setUserDatasObject(userDatas);
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
          <Letterheader phrase="My Datas" />
          <MyDataMain $darkmode={darkMode}>
            <SectionContainer>
              <ArticleContainer>
                <DataTabs userDatasObject={userDatasObject} />
              </ArticleContainer>
            </SectionContainer>
          </MyDataMain>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default memo(Mydata);
