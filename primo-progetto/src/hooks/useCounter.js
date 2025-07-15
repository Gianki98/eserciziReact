import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook per gestire un contatore con funzioni memoizzate
 * @param {number} initialValue - Valore iniziale del contatore
 * @returns {Object} count e funzioni memoizzate per controllare il contatore
 */
function useCounter(initialValue = 0) {
  // Manteniamo il valore iniziale con useRef per il reset
  const initialRef = useRef(initialValue);
  
  // Stato del contatore
  const [count, setCount] = useState(initialValue);
  
  // Increment memoizzato con useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Array vuoto: la funzione non ha dipendenze esterne
  
  // Decrement memoizzato con useCallback
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);
  
  // Reset memoizzato con useCallback
  const reset = useCallback(() => {
    setCount(initialRef.current);
  }, []); // Non dipende da initialValue ma da initialRef che è stabile
  
  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;