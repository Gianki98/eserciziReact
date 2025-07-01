import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const getButtonStyle = () => {
    return {
      backgroundColor: password.length < 8 ? 'red' : 'green',
      color: 'white',           
      padding: '10px 20px',     
      border: 'none',           
      borderRadius: '4px',      
      cursor: 'pointer',        
      fontSize: '16px',        
    };
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Password valida:', password.length >= 8);
  };

  return (
    <div>
      <h2>Login</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ 
            padding: '8px', 
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="password"
          placeholder="Password (min 8 caratteri)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ 
            padding: '8px', 
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      
      <button 
        onClick={handleLogin}
        style={getButtonStyle()} // Funzione che ritorna l'oggetto stile
      >
        Login
      </button>

      
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        {password.length > 0 && (
          <p style={{ 
            color: password.length < 8 ? 'red' : 'green',
            margin: '5px 0'
          }}>
            Password: {password.length < 8 ? 
              `Troppo corta (${password.length}/8)` : 
              'Valida ✓'
            }
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;