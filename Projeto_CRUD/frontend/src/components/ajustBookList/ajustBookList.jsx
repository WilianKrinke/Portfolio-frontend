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

  return (
    <>
      <AjustBookList>
        <DivSelectCategory $darkmode={darkMode}>
          <Label htmlFor="category" $darkmode={darkMode}>
            Category:{' '}
          </Label>
          <Select name="category" id="category" onChange={(e) => handleCategory(e)} $darkmode={darkMode}>
            <Option value="all" defaultValue $darkmode={darkMode}>
              All
            </Option>
            <Option value="Aventura" $darkmode={darkMode}>
              Aventura
            </Option>
            <Option value="Distopico" $darkmode={darkMode}>
              Distopico
            </Option>
            <Option value="Epico" $darkmode={darkMode}>
              Epico
            </Option>
            <Option value="Ficcao" $darkmode={darkMode}>
              Ficcao
            </Option>
            <Option value="Filosofia" $darkmode={darkMode}>
              Filosofia
            </Option>
            <Option value="Historia" $darkmode={darkMode}>
              Historia
            </Option>
            <Option value="Infantil" $darkmode={darkMode}>
              Infantil
            </Option>
            <Option value="Investigacao" $darkmode={darkMode}>
              Investigacao
            </Option>
            <Option value="Literatura Brasileira" $darkmode={darkMode}>
              Literatura Brasileira
            </Option>
            <Option value="Politica" $darkmode={darkMode}>
              Politica
            </Option>
            <Option value="Romance" $darkmode={darkMode}>
              Romance
            </Option>
          </Select>
        </DivSelectCategory>

        <DivChangePage $darkmode={darkMode}>
          <IconBack onClick={decCurrentPage} $darkmode={darkMode}>
            <FiChevronLeft title="Back" />
          </IconBack>
          <InfoPagination>
            <Span title="Page" $darkmode={darkMode}>
              {currentPage + 1}/{pages}
            </Span>
          </InfoPagination>
          <IconForward onClick={accCurrentPage} $darkmode={darkMode}>
            <FiChevronRight title="Next" />
          </IconForward>
        </DivChangePage>

        <DivSelectQnt $darkmode={darkMode}>
          <Label htmlFor="item" $darkmode={darkMode}>
            Itens per Page:{' '}
          </Label>
          <Select name="item" id="" onChange={(e) => handleItemPerPage(e)} $darkmode={darkMode}>
            <Option value="5" defaultValue $darkmode={darkMode}>
              5
            </Option>
            <Option value="10" $darkmode={darkMode}>
              10
            </Option>
            <Option value="15" $darkmode={darkMode}>
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
