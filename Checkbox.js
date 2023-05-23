import React, { useState } from 'react';

const Checkbox = ({ initialState }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <p>{isChecked ? 'Ativo' : 'Inativo'}</p>
    </div>
  );
};

export default Checkbox;

==================== app
import React from 'react';
import Checkbox from './Checkbox';

const App = () => {
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <Checkbox initialState={false} />
    </div>
  );
};

export default App;

