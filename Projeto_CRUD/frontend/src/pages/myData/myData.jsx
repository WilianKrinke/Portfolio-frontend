/* eslint-disable no-unused-vars */
import React, { useEffect, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DivLoading, MainStyled } from '../../primeComponents';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicTabs from '../../components/dataTab/dataTab';
import { ArticleContainer, SectionContainer } from './styled';

const Mydata = () => {
  const navigate = useNavigate();

  const [userNameState, setuserNameState] = useState('');
  const [loadingState, setloadingState] = useState(true);
  const [valueTab, setValueTab] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyDatas();
        console.log(response);

        if (response === false) {
          tokenTimeOut(navigate);
        } else {
          const { userName, userDatas } = response;

          setuserNameState(userName);
          setloadingState(false);
        }
      } catch (e) {
        const error = new Error(e);
        console.log(error.message);
      }
    })();
  }, []);

  function handleChangeTab(event, newValue) {
    setValueTab(newValue);
  }

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
          <MainStyled>
            <SectionContainer>
              <ArticleContainer>
                <BasicTabs />
              </ArticleContainer>
            </SectionContainer>
          </MainStyled>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default memo(Mydata);
