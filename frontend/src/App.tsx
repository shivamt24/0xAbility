import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ConnectKitButton } from 'connectkit';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
    <ConnectKitButton />
    
  </div>
  );
}

export default App;
