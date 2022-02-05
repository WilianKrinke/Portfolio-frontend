import propTypes from 'prop-types';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFavorite } from '../../utils/favorites/removeFavorite';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import ModalImage from '../modals/modalImage';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { ContainerCard, ContainerResume, ContainerTitle, H2, Icon, IconHeartBroken, P } from './styled';

const Favoritecard = ({ favoriteItem }) => {
    const { bookName, author, category, image, rating, resume, idBook, idUser, userName } = favoriteItem;

    const objectDatas = {
        idBook,
        bookName,
        idUser,
        userName,
    };

    const [changeHeart, setchangeHeart] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const navigate = useNavigate();

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    async function handleRemoveFavorites() {
        try {
            setchangeHeart(true);
            const response = await removeFavorite(objectDatas);

            if (response === false) {
                tokenTimeOut(navigate);
                setchangeHeart(false);
            } else {
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        } catch (error) {
            navigate(`/error-page/${error.message}`);
        }
    }

    function handleModalImage() {
        setisOpen(true);
    }

    return (
        <ContainerCard $darkmode={darkMode}>
            <ContainerTitle>
                <div className="div_img" onClick={handleModalImage}>
                    <img src={image} alt="Book Cover" title="Book Cover"></img>
                </div>
                <div className="div_icon_title">
                    {changeHeart ? (
                        <IconHeartBroken $darkmode={darkMode} />
                    ) : (
                        <Icon title="Remove from favorites" onClick={handleRemoveFavorites} $darkmode={darkMode} />
                    )}
                    <div className="div_title" title="Book Name">
                        <H2 $darkmode={darkMode}>{bookName}</H2>
                    </div>
                    <div className="div_stars" title={`Rating ${rating}`}>
                        <ReactStars
                            count={5}
                            size={18}
                            value={rating}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            edit={false}
                            title="Read Only"
                        />
                    </div>
                </div>
            </ContainerTitle>
            <ContainerResume>
                <div className="div_author" title="Author">
                    <P $darkmode={darkMode}>
                        <b>Author:</b> {author}
                    </P>
                </div>
                <div className="div_resume" title="Resume">
                    <P $darkmode={darkMode}>
                        <b>Resume:</b> {resume}
                    </P>
                </div>
                <div className="div_category" title="Category">
                    <P $darkmode={darkMode}>
                        <b>Category:</b> {category}
                    </P>
                </div>
            </ContainerResume>
            <ScrollToTop />
            <ModalImage image={image} isOpen={isOpen} setmodalImage={setisOpen} />
        </ContainerCard>
    );
};

Favoritecard.propTypes = {
    favoriteItem: propTypes.object,
};

export default Favoritecard;
