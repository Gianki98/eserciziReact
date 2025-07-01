import { useState } from 'react';

function CounterDisplay() {
  const [count, setCount] = useState(0);

  const displayStyle = {
    fontSize: '28px',     
    color: 'purple',      
    fontWeight: 'bold',   
    textAlign: 'center',  
    margin: '20px 0'      
  };

  return (
    <div>
      <h2>Counter Display</h2>
      {/* stili inline */}
      <div style={displayStyle}>
        Contatore: {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        Incrementa
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementa
      </button>
    </div>
  );
}

export default CounterDisplay;