import React from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';

function App() {
  return (
    <div>
      <Display result="0" />
      <ButtonPannel />
    </div>
  );
}

export default App;
