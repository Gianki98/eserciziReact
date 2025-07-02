import "./App.css";
import Hello from "./components/Hello.jsx";
import { LanguageContext } from "./contexts/language.jsx";

import { useState } from "react";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("it");

  return (
    <LanguageContext.Provider value={selectedLanguage}>
      <div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>

        <Hello />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
