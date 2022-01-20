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
} from './styled';

const Ajustbooklist = ({ decCurrentPage, currentPage, pages, accCurrentPage, setItensPerPage, setCategory }) => {
  function handleItemPerPage(e) {
    setItensPerPage(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <AjustBookList>
        <DivSelectCategory>
          <label htmlFor="category">Category: </label>
          <select name="category" id="category" onChange={(e) => handleCategory(e)}>
            <option value="all" defaultValue>
              All
            </option>
            <option value="Aventura">Aventura</option>
            <option value="Distopico">Distopico</option>
            <option value="Epico">Epico</option>
            <option value="Ficcao">Ficcao</option>
            <option value="Filosofia">Filosofia</option>
            <option value="Historia">Historia</option>
            <option value="Infantil">Infantil</option>
            <option value="Investigacao">Investigacao</option>
            <option value="Literatura Brasileira">Literatura Brasileira</option>
            <option value="Politica">Politica</option>
            <option value="Romance">Romance</option>
          </select>
        </DivSelectCategory>

        <DivChangePage>
          <IconBack onClick={decCurrentPage}>
            <FiChevronLeft title="Back" />
          </IconBack>
          <InfoPagination>
            <span title="Page">
              {currentPage + 1}/{pages}
            </span>
          </InfoPagination>
          <IconForward onClick={accCurrentPage}>
            <FiChevronRight title="Next" />
          </IconForward>
        </DivChangePage>

        <DivSelectQnt>
          <label htmlFor="item">Itens per Page: </label>
          <select name="item" id="" onChange={(e) => handleItemPerPage(e)}>
            <option value="5" defaultValue>
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
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
