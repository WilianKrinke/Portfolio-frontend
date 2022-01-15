/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { ContainerCard, ContainerResume, ContainerTitle, Icon, IconHeartBroken } from './styled';
import ReactStars from 'react-rating-stars-component';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { useState } from 'react';

const Favoritecard = ({ favoriteItem }) => {
  const { bookName, author, category, image, rating, resume } = favoriteItem;

  const [changeHeart, setchangeHeart] = useState(false);

  function handleRemoveFavorites() {
    setchangeHeart(true);
  }

  return (
    <ContainerCard>
      <ContainerTitle>
        <div className="div_img">
          <img src={image} alt="Book Cover" title="Book Cover"></img>
        </div>
        <div className="div_icon_title">
          {changeHeart ? <IconHeartBroken /> : <Icon title="Remove from favorites" onClick={handleRemoveFavorites} />}
          <div className="div_title">
            <h2>{bookName}</h2>
          </div>
          <div className="div_stars">
            <ReactStars
              count={5}
              size={18}
              value={rating}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffff00"
              edit={false}
              title="Read Only"
            />
          </div>
        </div>
      </ContainerTitle>
      <ContainerResume>
        <div className="div_author">
          <p>
            <b>Author:</b> {author}
          </p>
        </div>
        <div className="div_resume">
          <p>
            <b>Resume:</b> {resume}
          </p>
        </div>
        <div className="div_category">
          <p>
            <b>Category:</b> {category}
          </p>
        </div>
      </ContainerResume>
      <ScrollToTop />
    </ContainerCard>
  );
};

Favoritecard.propTypes = {
  favoriteItem: propTypes.object,
};

export default Favoritecard;
