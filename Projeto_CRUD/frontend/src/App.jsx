import React from 'react';
import { useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import { I18nProvider } from './i18n/index.js';
import Routes from './routes/index.js';

function App() {
    const languageStateReduxObject = useSelector((state) => state.changeLanguageReducer.languageObject);

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
                />
            </I18nProvider>
        </>
    );
}

export default App;
