import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ContainerIcon, ContainerLinks, ContainerMenu, IconClose, IconHamburguer } from './styled';

const Menu = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <ContainerMenu isOpen={isOpen}>
        <ContainerIcon>
          <IconClose className="fas fa-times fa-2x" isOpen={isOpen} onClick={() => setisOpen(!isOpen)} />
        </ContainerIcon>

        <ContainerLinks>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Galler</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </ContainerLinks>
      </ContainerMenu>
      <IconHamburguer className="fas fa-bars fa-2x" isOpen={isOpen} onClick={() => setisOpen(!isOpen)} />
    </>
  );
};

Menu.propTypes = {
  isShow: propTypes.bool,
};

export default Menu;
