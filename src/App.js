import React from 'react';
import GrandParentComponent from './GrandParentComponent';
import { AppProvider } from './AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <GrandParentComponent />
      </div>
    </AppProvider>
  );
}

export default App;
