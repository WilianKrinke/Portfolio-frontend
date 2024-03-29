import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataTabs from '../../components/dataTab/dataTab';
import InternalFooter from '../../components/footer/InternalFooter';
import HeaderComponent from '../../components/header/HeaderComponent';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import translate from '../../i18n/translate';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { ArticleContainer, MyDataMain, SectionContainer } from './styled';

const Mydata = () => {
    const navigate = useNavigate();

    const [loadingState, setloadingState] = useState(true);
    const [userDatasObject, setUserDatasObject] = useState();

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    useEffect(() => {
        (async () => {
            try {
                const response = await getMyDatas();
                response === false && tokenTimeOut();

                const { userDatas } = response;

                setUserDatasObject(userDatas);
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
                    <HeaderComponent phrase={translate('myDataTitle')} />
                    <MyDataMain $darkmode={darkMode}>
                        <SectionContainer>
                            <ArticleContainer>
                                <DataTabs userDatasObject={userDatasObject} />
                            </ArticleContainer>
                        </SectionContainer>
                    </MyDataMain>
                    <InternalFooter />
                </>
            )}
        </>
    );
};

export default memo(Mydata);
