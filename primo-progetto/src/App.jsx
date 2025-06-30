import "./App.css";
import Colors from "./components/Colors.jsx";

function App() {
  const colorData = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Blu" },
    { id: 3, name: "Verde" },
    { id: 4, name: "Giallo" },
  ];
  return (
    <>
      <Colors colors={colorData} />
    </>
  );
}

export default App;
