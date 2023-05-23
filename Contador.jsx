import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div role="main">
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar} disabled={count <= 0}>-</button>
    </div>
  );
};

export default Contador;



===================================== app
import React from 'react';
import Contador from './Contador';


const App = () => {
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <Contador />
    </div>
  );
};

export default App;

