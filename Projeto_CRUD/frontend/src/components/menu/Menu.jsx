/* eslint-disable no-unused-vars */
import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ContainerIcon, ContainerLinks, ContainerMenu, ContainerUser, IconClose, IconHamburguer } from './styled';
import { ButtonLogOut } from '../Buttons';
import { useNavigate } from 'react-router';
import { useDetectClickOutside } from 'react-detect-click-outside';
import propTypes from 'prop-types';
import logout from '../../utils/Auth/logout';

const Menu = ({ user = 'Loading...' }) => {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setisOpen(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeMenu });

  return (
    <>
      <ContainerMenu isOpen={isOpen} ref={ref}>
        <IconHamburguer
          aria-label="Menu"
          title="Menu"
          className="fas fa-bars fa-2x"
          isOpen={isOpen}
          onClick={() => setisOpen(!isOpen)}
        />
        <ContainerIcon>
          <IconClose title="Close Menu" onClick={() => setisOpen(!isOpen)} />
        </ContainerIcon>
        <ContainerUser>
          <p>Welcome user {user}!</p>
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
              <Link to="#">My Data</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <ButtonLogOut onClick={() => logout(navigate)}>Logout</ButtonLogOut>
            </li>
          </ul>
        </ContainerLinks>
      </ContainerMenu>
    </>
  );
};

Menu.propTypes = {
  user: propTypes.string,
};

export default memo(Menu);
