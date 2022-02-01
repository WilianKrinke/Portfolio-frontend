import React from 'react';
import propTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  AjustBookList,
  DivChangePage,
  DivSelectCategory,
  DivSelectQnt,
  IconBack,
  IconForward,
  InfoPagination,
  Label,
  Option,
  Select,
  Span,
} from './styled';
import { useSelector } from 'react-redux';

const Ajustbooklist = ({ decCurrentPage, currentPage, pages, accCurrentPage, setItensPerPage, setCategory }) => {
  function handleItemPerPage(e) {
    setItensPerPage(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
  console.log(darkMode);

  return (
    <>
      <AjustBookList>
        <DivSelectCategory darkMode={darkMode}>
          <Label htmlFor="category" darkMode={darkMode}>
            Category:{' '}
          </Label>
          <Select name="category" id="category" onChange={(e) => handleCategory(e)} darkMode={darkMode}>
            <Option value="all" defaultValue darkMode={darkMode}>
              All
            </Option>
            <Option value="Aventura" darkMode={darkMode}>
              Aventura
            </Option>
            <Option value="Distopico" darkMode={darkMode}>
              Distopico
            </Option>
            <Option value="Epico" darkMode={darkMode}>
              Epico
            </Option>
            <Option value="Ficcao" darkMode={darkMode}>
              Ficcao
            </Option>
            <Option value="Filosofia" darkMode={darkMode}>
              Filosofia
            </Option>
            <Option value="Historia" darkMode={darkMode}>
              Historia
            </Option>
            <Option value="Infantil" darkMode={darkMode}>
              Infantil
            </Option>
            <Option value="Investigacao" darkMode={darkMode}>
              Investigacao
            </Option>
            <Option value="Literatura Brasileira" darkMode={darkMode}>
              Literatura Brasileira
            </Option>
            <Option value="Politica" darkMode={darkMode}>
              Politica
            </Option>
            <Option value="Romance" darkMode={darkMode}>
              Romance
            </Option>
          </Select>
        </DivSelectCategory>

        <DivChangePage darkMode={darkMode}>
          <IconBack onClick={decCurrentPage} darkMode={darkMode}>
            <FiChevronLeft title="Back" />
          </IconBack>
          <InfoPagination>
            <Span title="Page" darkMode={darkMode}>
              {currentPage + 1}/{pages}
            </Span>
          </InfoPagination>
          <IconForward onClick={accCurrentPage} darkMode={darkMode}>
            <FiChevronRight title="Next" />
          </IconForward>
        </DivChangePage>

        <DivSelectQnt darkMode={darkMode}>
          <Label htmlFor="item" darkMode={darkMode}>
            Itens per Page:{' '}
          </Label>
          <Select name="item" id="" onChange={(e) => handleItemPerPage(e)} darkMode={darkMode}>
            <Option value="5" defaultValue darkMode={darkMode}>
              5
            </Option>
            <Option value="10" darkMode={darkMode}>
              10
            </Option>
            <Option value="15" darkMode={darkMode}>
              15
            </Option>
          </Select>
        </DivSelectQnt>
      </AjustBookList>
    </>
  );
};

Ajustbooklist.propTypes = {
  decCurrentPage: propTypes.func,
  currentPage: propTypes.number,
  pages: propTypes.number,
  accCurrentPage: propTypes.func,
  setItensPerPage: propTypes.func,
  setCategory: propTypes.func,
};

export default Ajustbooklist;
