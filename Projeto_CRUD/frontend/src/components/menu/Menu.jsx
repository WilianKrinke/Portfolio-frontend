/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerIcon,
  ContainerLinks,
  ContainerMenu,
  ContainerUserMenu,
  ContainerUserName,
  IconClose,
  IconHamburguer,
} from './styled';
import { ButtonLogOut } from '../Buttons';
import { useNavigate } from 'react-router';
import propTypes from 'prop-types';
import logout from '../../utils/Auth/logout';

const Menu = ({ user = 'Loading...' }) => {
  const [isOpen, setisOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <ContainerMenu isOpen={isOpen}>
        <ContainerUserMenu>
          <ContainerUserName>
            <p>Welcome user {user.userName}!</p>
          </ContainerUserName>
          <ContainerIcon>
            <IconClose className="fas fa-times fa-2x" isOpen={isOpen} onClick={() => setisOpen(!isOpen)} />
          </ContainerIcon>
        </ContainerUserMenu>

        <ContainerLinks>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Gallery</Link>
            </li>
            <li>
              <Link to="#">About</Link>
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
      <IconHamburguer className="fas fa-bars fa-2x" isOpen={isOpen} onClick={() => setisOpen(!isOpen)} />
    </>
  );
};

Menu.propTypes = {
  user: propTypes.any,
};

export default Menu;
