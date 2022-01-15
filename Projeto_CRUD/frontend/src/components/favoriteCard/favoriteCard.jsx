import React from 'react';
import propTypes from 'prop-types';
import { ContainerCard, ContainerResume, ContainerTitle, Icon, IconHeartBroken } from './styled';
import ReactStars from 'react-rating-stars-component';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { useState } from 'react';
import { removeFavorite } from '../../utils/favorites/removeFavorite';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Favoritecard = ({ favoriteItem }) => {
  const { bookName, author, category, image, rating, resume, idBook, idUser, userName } = favoriteItem;
  const navigate = useNavigate();

  const objectDatas = {
    idBook,
    bookName,
    idUser,
    userName,
  };

  const [changeHeart, setchangeHeart] = useState(false);

  async function handleRemoveFavorites() {
    try {
      setchangeHeart(true);
      const response = await removeFavorite(objectDatas);

      if (response === false) {
        toast.warn('Token time expired, please re-login');
        setTimeout(() => {
          navigate('/');
        }, 3000);
        setchangeHeart(false);
      } else {
        toast.success('Successfully removed from favorites!');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      //para a página de erro
    }
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
