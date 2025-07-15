import "./App.css";
import GithubUsers from "./components/GithubUsers";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import GithubUserTest from "./components/GithubUserTest";
import LocationTracker from "./components/LocationTracker";

function App() {
  return (
    <div>
      <h1>Custom Hooks Examples</h1>

      <Counter />

      <LoginForm />

      <LocationTracker />

      <GithubUsers />

      <GithubUserTest />
    </div>
  );
}

export default App;
