import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import Routes from './routes/index.js';

function App() {
    return (
        <>
            <Routes />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover={false}
                width={500}
                transition={Slide}
            />
        </>
    );
}

export default App;
