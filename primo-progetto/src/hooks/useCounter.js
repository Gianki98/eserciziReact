import { useState } from 'react';

function useCounter(initialValue = 0) {
  // Stato del contatore
  const [count, setCount] = useState(initialValue);
  
  // Funzione per incrementare
  const increment = () => {
    setCount(count + 1);
  };
  
  // Funzione per decrementare
  const decrement = () => {
    setCount(count - 1);
  };
  
  // Funzione per resettare al valore iniziale
  const reset = () => {
    setCount(initialValue);
  };
  
  // Restituiamo tutto ciò che serve
  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;