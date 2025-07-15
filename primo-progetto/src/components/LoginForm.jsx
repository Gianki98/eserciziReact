import useForm from '../hooks/useForm';

function LoginForm() {
  // Usiamo il nostro custom hook
  const { values, handleChange, resetForm } = useForm({
    username: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${values.username}\nPassword: ${values.password}`);
    resetForm();
  };
  
  return (
    <div>
      <h2>Login Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <button type="submit">Login</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </div>
      </form>
      
     
    </div>
  );
}

export default LoginForm;