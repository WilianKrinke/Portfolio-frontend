import React from 'react';
import { AuthProvider } from './context/authContext.js';
import Routes from './routes/index.js';

function App() {
  return (
    <AuthProvider>
      <Routes />;
    </AuthProvider>
  );
}

export default App;
