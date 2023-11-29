// src/App.js
import React from 'react';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Las Vegas" />
        <Weather city="New York" />
        <Weather city="Mexico" />
        <Weather city="California" />
      </header>
    </div>
  );
}

export default App;
