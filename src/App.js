import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [input, setInput] = useState();
  const handleClick = (x) => {
    let current = input;
    if (!input) setInput(x);
    else setInput(current += x);
  };
  const handleClear = () => {
    setInput();
  };
  return (
    <div className="App">
      <div>{input}</div>
      <Button onClick={() => { handleClick('7'); }} variant="outlined">7</Button>
      <Button onClick={() => { handleClick('8'); }} variant="outlined">8</Button>
      <Button onClick={() => { handleClick(9); }} variant="outlined">9</Button>
      <Button onClick={() => { handleClick('+'); }} variant="outlined">+</Button>

      <br />
      <Button onClick={() => { handleClick(4); }} variant="outlined">4</Button>
      <Button onClick={() => { handleClick(5); }} variant="outlined">5</Button>
      <Button onClick={() => { handleClick(6); }} variant="outlined">6</Button>
      <Button onClick={() => { handleClick('-'); }} variant="outlined">-</Button>

      <br />
      <Button onClick={() => { handleClick(1); }} variant="outlined">1</Button>
      <Button onClick={() => { handleClick(2); }} variant="outlined">2</Button>
      <Button onClick={() => { handleClick(3); }} variant="outlined">3</Button>
      <Button onClick={() => { handleClick('*'); }} variant="outlined">*</Button>

      <br />
      <Button onClick={() => { handleClick(0); }} variant="outlined">0</Button>
      <Button onClick={() => { handleClick('.'); }} variant="outlined">.</Button>
      <Button onClick={() => { handleClick(')'); }} variant="outlined">=</Button>
      <Button onClick={() => { handleClick('/'); }} variant="outlined">/</Button>

      <br />
      <Button onClick={() => { handleClick('('); }} variant="outlined">(</Button>
      <Button onClick={() => { handleClick(')'); }} variant="outlined">)</Button>
      <Button onClick={() => { handleClear(); }} variant="outlined">Clear</Button>
    </div>
  );
}

export default App;
