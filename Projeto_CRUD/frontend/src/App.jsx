import React from 'react';
import Routes from './routes/index.js';
import { AuthProvider } from './context/authContext.js';

function App() {
  return (
    <AuthProvider>
      <Routes />;
    </AuthProvider>
  );
}

export default App;
