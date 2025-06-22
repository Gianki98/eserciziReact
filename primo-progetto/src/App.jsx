import "./App.css";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <>
      <Counter initialValue={0} incrementAmount={1} />
    </>
  );
}

export default App;
