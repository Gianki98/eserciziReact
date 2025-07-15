import useCounter from '../hooks/useCounter';

function Counter() {
  // Usiamo il nostro custom hook
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Counter Example</h2>
      <h3>Valore: {count}</h3>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;