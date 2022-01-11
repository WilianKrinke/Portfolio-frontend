import React from 'react';
import propTypes from 'prop-types'

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
