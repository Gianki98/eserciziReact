import "./App.css";
import Hello from "./components/Hello.jsx";
import Message from "./components/message.jsx";

function App() {
  return (
    <>
      <div>
        <Hello /> 
        <Message />
        <Hello />
      </div>
    </>
  );
}

export default App;
