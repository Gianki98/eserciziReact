import "./App.css";
import Welcome from "./Welcome";
import CounterDisplay from "./CounterDisplay";
import Login from "./Login";

function App() {
  return (
    <div className="app-container">
      <h1>Styling Components</h1>

      <Welcome />

      <CounterDisplay />

      <Login />
    </div>
  );
}

export default App;
