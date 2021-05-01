import React, { Fragment } from 'react';
import {Headerstyled} from '../styleds/styleds'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <Fragment>
            <Headerstyled>
                <Link className="blogdeculinaria" to="/">Blog de Culinária</Link>
            </Headerstyled>
        </Fragment>
    );
}

export default index;
