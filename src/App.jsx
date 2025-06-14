import { useState } from 'react';
import { getPrimeNumbers } from './prime-numbers';
import './App.css';

const IncrementButton = ({ onClick }) => (
  <button onClick={onClick}>Increment count</button>
);

const DummyComponent = () => (
  <div>Dummy</div>
);

const PrimeNumbers = ({ primeNumbers }) => (
  <div>
    <DummyComponent />
    <p>{primeNumbers.join(', ')}</p>
  </div>
);

const App = () => {
  const [count, setCount] = useState(0);

  const primeNumbers = getPrimeNumbers(9999);

  const increment = () => setCount(prev => prev + 1);

  return (
    <>
      <h1>Count is {count}</h1>
      <IncrementButton onClick={increment} />
      <PrimeNumbers primeNumbers={primeNumbers} />
    </>
  );
};

export default App;
