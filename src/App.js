import React from 'react';
import 'normalize.css';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  return (
    <div className="app">
      <Display result="0" />
      <ButtonPanel className="panel" />
    </div>
  );
}

export default App;
