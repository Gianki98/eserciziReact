import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ShowGithubUser from "./components/ShowGithubUser";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |<Link to="/counter">Counter</Link> |
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Carlo" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/*" element={<GithubUsers />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
