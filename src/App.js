import React from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  return (
    <div>
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
