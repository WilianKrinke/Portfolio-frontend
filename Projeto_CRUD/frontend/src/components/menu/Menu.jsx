import React, { memo, useEffect, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';
import logout from '../../utils/Auth/logout';
import getUserName from '../../utils/getUserName/getUserName';
import isUpdateDatas from '../../utils/isUpdateDatas/isUpdateDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { ButtonLogOut } from '../Buttons';
import ButtonChangeMode from '../Buttons/ButtonChangeMode';
import { ContainerIsUpDated, ContainerLinks, ContainerMenu, ContainerUser, IconClose, IconHamburguer } from './styled';

const Menu = () => {
    const [isOpen, setisOpen] = useState(false);
    const [isUpDatedDatasState, setisUpDatedDatasState] = useState(true);
    const [userNameState, setuserNameState] = useState('Loading...');

    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    useEffect(() => {
        (async () => {
            try {
                const response = await isUpdateDatas();
                const { userName } = await getUserName();
                setuserNameState(userName);

                const { isUpDated } = response;

                if (response === false) {
                    tokenTimeOut(navigate);
                }

                if (isUpDated === false) {
                    setisUpDatedDatasState(false);
                }
            } catch (error) {
                navigate(`/error-page/${error.message}`);
            }
        })();
    }, []);

    const closeMenu = () => {
        setisOpen(false);
    };

    const ref = useDetectClickOutside({ onTriggered: closeMenu });

    return (
        <>
            <ContainerMenu $isopen={isOpen} ref={ref}>
                <IconHamburguer
                    aria-label="Menu"
                    title="Menu"
                    className="fas fa-bars fa-2x"
                    $isopen={isOpen}
                    onClick={() => setisOpen(!isOpen)}
                    $darkmode={darkMode}
                />

                <IconClose title="Close Menu" onClick={() => setisOpen(!isOpen)} $isopen={isOpen} />

                <ContainerUser>
                    <p>
                        {translate('welcome')} {userNameState}!
                    </p>
                </ContainerUser>

                <ContainerLinks>
                    <ul>
                        <li>
                            <Link to="/book-list">{translate('booklist')}</Link>
                        </li>
                        <li>
                            <Link to="/my-borrowed-books">{translate('myborrowedbooks')}</Link>
                        </li>
                        <li>
                            <Link to="/my-favorites">{translate('myfavorites')}</Link>
                        </li>
                        <li>
                            <Link to="/my-data">{translate('mydatas')}</Link>
                        </li>
                        <li>
                            <Link to="/contact">{translate('contactus')}</Link>
                        </li>
                        <li>
                            <Link to="/tutorial/true">{translate('tutorial')}</Link>
                        </li>
                        <li>
                            <ButtonLogOut onClick={() => logout(navigate)}>{translate('logout')}</ButtonLogOut>
                        </li>
                        <li className="change_mode">
                            <ButtonChangeMode />
                        </li>
                    </ul>
                </ContainerLinks>

                <ContainerIsUpDated>
                    {isUpDatedDatasState === false && <p>{translate('datanotupdate')}</p>}
                </ContainerIsUpDated>
            </ContainerMenu>
        </>
    );
};

export default memo(Menu);
