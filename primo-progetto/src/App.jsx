import "./App.css";
import AlertClock from "./components/AlertClock";

function App() {
  const handleShowTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`L'ora corrente è: ${currentTime}`);
  };

  return (
    <>
      <AlertClock onClick={handleShowTime} />
    </>
  );
}

export default App;
