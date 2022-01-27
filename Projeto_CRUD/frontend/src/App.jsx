/* eslint-disable no-unused-vars */
import React from 'react';
import Routes from './routes/index.js';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
