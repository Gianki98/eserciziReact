import "./App.css";
import CounterOptimized from "./components/CounterOptimized";
import FilteredListDemo from "./components/FilteredListDemo";

function App() {
  return (
    <div>
      <h1>useCallback and useMemo Examples</h1>
      
      
      <CounterOptimized />
      
      
      <FilteredListDemo />
    </div>
  );
}

export default App;