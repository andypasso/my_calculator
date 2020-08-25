import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate';

export const LogicContext = React.createContext();

function App() {
  const [dataObject, setDataObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setDataObject(dataObject => calculate(
      {
        total: dataObject.total,
        next: dataObject.next,
        operation: dataObject.operation,
      }, buttonName,
    ));
  }

  const LogicContextValue = {
    handleClick,
  };

  const { total, next } = dataObject;
  const result = next || total;
  return (
    <LogicContext.Provider value={LogicContextValue}>
      <div className="app">
        <Display result={result} />
        <ButtonPanel className="panel" />
      </div>
    </LogicContext.Provider>
  );
}

export default App;
