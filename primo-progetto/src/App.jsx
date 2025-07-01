import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container title="Il mio contenitore">
        <p>Questo contenuto può essere nascosto!</p>
        <button>Un pulsante</button>
      </Container>
    </>
  );
}

export default App;
