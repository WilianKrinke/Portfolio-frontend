import React from 'react';
import { useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import { I18nProvider } from '../i18n/index.js';
import Routes from '../routes/index.js';
import './app.css';

function App() {
    const languageStateReduxObject = useSelector((state) => state.changeLanguageReducer.languageObject);
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <I18nProvider locale={languageStateReduxObject}>
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
                    className={darkMode ? 'toasty_css_dark' : 'toasty_css'}
                />
            </I18nProvider>
        </>
    );
}

export default App;
