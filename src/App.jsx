import { useState } from 'react';
import './stylesheets/App.css';
import Button from './components/button';
import Screen from './components/screen';
import ClearButton from './components/clearButton';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("");

  const addInput = valor => {
    setInput(input + valor);
  }
  
  const calculateResult = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen
          input={input}
        />
        <div className="fila">
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton manageClear={() => setInput(' ')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App