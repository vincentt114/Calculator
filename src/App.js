import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { calculate } from './functions';

function App() {
  const [display, setDisplay] = useState('0');
  const [prevDisplay, setPrevDisplay] = useState();
  const handleNum = (num) => {
    if (display === '0') setDisplay(num);
    else setDisplay(display + num);
  };
  const handleOperand = (operand) => {
    setDisplay(`${display} ${operand} `);
  };
  const handleClear = () => {
    setDisplay('0');
  };
  const handleCalculate = () => {
    setPrevDisplay(display);
    setDisplay(calculate(display));
  };
  return (
    <div className="App">
      <div id="prevDisplay">
        {prevDisplay}
      </div>
      <div id="Display">{display}</div>
      <br />
      <Button onClick={() => { handleNum('7'); }} variant="outlined">7</Button>
      <Button onClick={() => { handleNum('8'); }} variant="outlined">8</Button>
      <Button onClick={() => { handleNum('9'); }} variant="outlined">9</Button>
      <Button onClick={() => { handleOperand('+'); }} className="operand" variant="outlined">+</Button>

      <br />
      <Button onClick={() => { handleNum('4'); }} variant="outlined">4</Button>
      <Button onClick={() => { handleNum('5'); }} variant="outlined">5</Button>
      <Button onClick={() => { handleNum('6'); }} variant="outlined">6</Button>
      <Button onClick={() => { handleOperand('-'); }} className="operand" variant="outlined">-</Button>

      <br />
      <Button onClick={() => { handleNum('1'); }} variant="outlined">1</Button>
      <Button onClick={() => { handleNum('2'); }} variant="outlined">2</Button>
      <Button onClick={() => { handleNum('3'); }} variant="outlined">3</Button>
      <Button onClick={() => { handleOperand('*'); }} className="operand" variant="outlined">*</Button>

      <br />
      <Button onClick={() => { handleNum('0'); }} variant="outlined">0</Button>
      <Button onClick={() => { handleNum('.'); }} variant="outlined">.</Button>
      <Button onClick={() => { handleOperand('^'); }} className="operand" variant="outlined">^</Button>
      <Button onClick={() => { handleOperand('/'); }} className="operand" variant="outlined">/</Button>

      <br />
      <Button onClick={() => { handleCalculate('='); }} variant="outlined">=</Button>
      <Button onClick={() => { handleNum('('); }} variant="outlined">(</Button>
      <Button onClick={() => { handleNum(')'); }} variant="outlined">)</Button>
      <Button onClick={() => { handleClear(); }} variant="outlined">Clear</Button>
    </div>
  );
}

export default App;
