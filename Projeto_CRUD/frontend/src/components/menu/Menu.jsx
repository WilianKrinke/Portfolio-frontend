/* eslint-disable no-unused-vars */
import React, { useState, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContainerIsUpDated, ContainerLinks, ContainerMenu, ContainerUser, IconClose, IconHamburguer } from './styled';
import { ButtonLogOut } from '../Buttons';
import { useNavigate } from 'react-router';
import { useDetectClickOutside } from 'react-detect-click-outside';
import propTypes from 'prop-types';
import logout from '../../utils/Auth/logout';
import isUpdateDatas from '../../utils/isUpdateDatas/isUpdateDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import Buttonchangemode from '../Buttons/ButtonChangeMode';
import ButtonChangeMode from '../Buttons/ButtonChangeMode';
import { useDispatch } from 'react-redux';

const Menu = ({ user = 'Loading...' }) => {
  const [isOpen, setisOpen] = useState(false);
  const [isUpDatedDatasState, setisUpDatedDatasState] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await isUpdateDatas();
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
        />

        <IconClose title="Close Menu" onClick={() => setisOpen(!isOpen)} $isopen={isOpen} />

        <ContainerUser>
          <p>Welcome {user}!</p>
        </ContainerUser>

        <ContainerLinks>
          <ul>
            <li>
              <Link to="/book-list">Book List</Link>
            </li>
            <li>
              <Link to="/my-borrowed-books">My Borrowed Books</Link>
            </li>
            <li>
              <Link to="/my-favorites">My Favorites</Link>
            </li>
            <li>
              <Link to="/my-data">My Data</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <ButtonLogOut onClick={() => logout(navigate)}>Logout</ButtonLogOut>
            </li>
            <li className="change_mode">
              <ButtonChangeMode />
            </li>
          </ul>
        </ContainerLinks>

        <ContainerIsUpDated>{isUpDatedDatasState === false && <p>Your Data Is Not Up to Date</p>}</ContainerIsUpDated>
      </ContainerMenu>
    </>
  );
};

Menu.propTypes = {
  user: propTypes.string,
};

export default memo(Menu);
