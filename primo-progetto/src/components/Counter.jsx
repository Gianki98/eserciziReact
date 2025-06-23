import { useState, useEffect } from "react";

// Componente Counter
const Counter = ({ initialValue = 0, incrementAmount = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  // Side effect che stampa il valore del counter nella console
  useEffect(() => {
    console.log(`Valore corrente del counter: ${counter}`);
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Incrementa</button>
    </div>
  );
};
export default Counter;
