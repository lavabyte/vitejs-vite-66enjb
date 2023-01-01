import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { processInput } from './visualize/integrate';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{processInput('乾造壬申年癸亥月癸亥日癸亥时')}</h1>
    </div>
  );
}

export default App;
