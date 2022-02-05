import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataTabs from '../../components/dataTab/dataTab';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { ArticleContainer, MyDataMain, SectionContainer } from './styled';

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
                <Loading />
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
