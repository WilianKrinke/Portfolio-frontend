import propTypes from 'prop-types';
import React from 'react';

const Pagination = ({ currentItems }) => {
    return (
        <>
        {currentItems &&
            currentItems.map((item) => (
          <div key={item.idBook}>
            <h3>Item #{item}</h3>
          </div>
        ))}
            
        </>
    );
}

Pagination.propTypes = {
    currentItems: propTypes.array
}

export default Pagination;
