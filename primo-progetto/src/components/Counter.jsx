import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
function Counter(props) {
  const [counter, setCounter] = useState(props.initialValue);

  /*
  DOMANDA:
  Quando si chiama la funzione "setter" (es. setCounter) per aggiornare lo stato, 
  il parametro dovrebbe essere una funzione o un valore immediato? Perché?

  RISPOSTA:
  La pratica migliore e più sicura è passare una FUNZIONE, specialmente quando
  il nuovo valore dello stato dipende da quello precedente.

  ESEMPI:
  1. Valore immediato:   setCounter(counter + 1);
  2. Funzione:           setCounter(counterPrecedente => counterPrecedente + 1);

  PERCHÉ È MEGLIO USARE UNA FUNZIONE?
  React può raggruppare più aggiornamenti di stato in un unico "batch" per migliorare 
  le performance. Questo significa che gli aggiornamenti non sono sempre immediati (sono asincroni).

  - Usando il "valore immediato" (`counter + 1`), c'è il rischio di leggere un valore
    di stato non ancora aggiornato (in inglese "stale state") se più aggiornamenti 
    vengono eseguiti in rapida successione. Questo può causare errori di calcolo.
  
  - Passando una "funzione", React garantisce che il parametro che riceviamo 
    (es. `counterPrecedente`) sia sempre lo stato più recente e corretto prima 
    dell'aggiornamento. Questo rende il componente più affidabile e previene bug.
*/

  function addCounter() {
    setCounter(counter + props.incrementAmount);
  }
  function subtractCounter() {
    setCounter(counter - props.incrementAmount);
  }
  function reset() {
    setCounter(props.initialValue);
  }
  return (
    <>
      <p>Hai cliccato {counter} volte</p>
      <button onClick={addCounter}>Aggiungi</button>
      <button onClick={subtractCounter}>Sottrai</button>
      <button onClick={reset}>Reset</button>
      <CounterDisplay count={counter} />
    </>
  );
}

export default Counter;
