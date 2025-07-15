import React, { memo } from 'react';
import useCounter from '../hooks/useCounter';

// Componente figlio memoizzato per dimostrare i benefici di useCallback
const CounterButton = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

CounterButton.displayName = 'CounterButton';

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Optimized Counter with useCallback</h2>
      <h3>Count: {count}</h3>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {/* Questi button non si ri-renderizzano grazie a useCallback */}
        <CounterButton onClick={increment}>+1</CounterButton>
        <CounterButton onClick={decrement}>-1</CounterButton>
        <CounterButton onClick={reset}>Reset</CounterButton>
      </div>
      
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        Check console: buttons don't re-render thanks to useCallback!
      </p>
    </div>
  );
}

export default Counter;