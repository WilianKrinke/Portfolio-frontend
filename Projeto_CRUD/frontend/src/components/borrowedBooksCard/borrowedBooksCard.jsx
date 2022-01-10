/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle } from './styled';
import { format, isAfter, isBefore } from 'date-fns';
import ReactStars from 'react-rating-stars-component';

const Borrowedbookscard = ({ infoDatas }) => {
  //console.log(infoDatas);

  const { image, bookName, rating, resume, devolutionDate } = infoDatas;

  const dateDevolution = new Date(devolutionDate);
  const today = new Date();

  const isBookLate = isAfter(today, dateDevolution);

  console.log(isBookLate);

  return (
    <BorrowedBookCard>
      <ContainerTitle>
        <div className="div_img">
          <img src={image} alt="Cover Book" title="Book Cover" loading="lazy" />
        </div>
        <div className="div_title">
          <h3 title="Book Name">{bookName}</h3>
        </div>
        <div className="div_rating" title="Rating">
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
      <ContainerResume>
        <div className="div_resume">
          <p>{resume}</p>
        </div>
      </ContainerResume>
      <ContainerActions />
    </BorrowedBookCard>
  );
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default memo(Borrowedbookscard);
