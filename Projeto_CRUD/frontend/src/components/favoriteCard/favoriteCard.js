/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types'
import { ContainerCard, ContainerTitle, Icon } from './styled';

const Favoritecard = ({ favoriteItem }) => {

    const {bookName, author, category, image, rating, resume} = favoriteItem;

    function handleRemoveFavorites(){
        console.log('Entrou na função')
    }
    
    return (
        <ContainerCard>
            <ContainerTitle>
                <Icon title='Remove from favorites' onClick={handleRemoveFavorites}/>
            </ContainerTitle>
        </ContainerCard>
    );
}

Favoritecard.propTypes = {
    favoriteItem: propTypes.object
}



export default Favoritecard;
