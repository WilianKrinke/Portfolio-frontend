import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ForgetPass = () => {
    return (
        <div className="forgetPass">
            <Link to="/forget-pass">Forgot your password?</Link>
        </div>
    );
};

export default memo(ForgetPass);
