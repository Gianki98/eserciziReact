import { useContext } from 'react';
import { LanguageContext } from '../contexts/language';


function Hello() {
  const language = useContext(LanguageContext);
  
  const translations = {
    en: "Hello, World!",
    it: "Ciao, Mondo!",
    es: "Hola, Mundo!",
    fr: "Bonjour, Monde!"
  };

  return <h2>{translations[language]}</h2>;
}
export default Hello;
