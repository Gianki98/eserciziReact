import "./App.css";
import InteractiveWelcome from "./components/InteractiveWelcome.jsx";
import Login from "./components/Login.jsx";

function App() {
  const handleLogin = (loginData) => {
    console.log("Login data:", loginData);
  };

  return (
    <>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </>
  );
}

export default App;
