import React from "react";
import "./App.css";
import FocusableInput from "./FocusableInput";
import { MountTracker } from "./MountTracker";

function App() {
  return (
    <React.StrictMode>
      <div>
        <FocusableInput />
        <MountTracker />
      </div>
    </React.StrictMode>
  );
}

export default App;
