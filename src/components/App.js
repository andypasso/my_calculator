import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="app">
      <Display result="0" />
      <ButtonPanel className="panel" />
    </div>
  );
}

export default App;
