import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';
import './style.css';

const ForgetPass = () => {
    return (
        <div className="forgetPass">
            <Link to="/forget-pass">{translate('forgotyourpassword')}</Link>
        </div>
    );
};

export default memo(ForgetPass);
