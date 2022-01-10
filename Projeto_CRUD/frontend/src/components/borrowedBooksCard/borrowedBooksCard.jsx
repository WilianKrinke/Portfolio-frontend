/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle } from './styled';
import ReactStars from 'react-rating-stars-component';

const Borrowedbookscard = ({ infoDatas }) => {
  console.log(infoDatas);

  const { image, bookName, rating } = infoDatas;

  return (
    <BorrowedBookCard>
      <ContainerTitle>
        <div className="divimg">
          <img src={image} alt="Cover Book" title="Book Cover" loading="lazy" />
        </div>
        <div className="divtitle">
          <h3 title="Book Name">{bookName}</h3>
        </div>
        <div className="divrating" title="Rating">
          <ReactStars
            count={5}
            size={18}
            value={rating}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffff00"
          />
        </div>
      </ContainerTitle>
      <ContainerResume />
      <ContainerActions />
    </BorrowedBookCard>
  );
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default memo(Borrowedbookscard);
