import { useRef, useEffect } from "react";

export function MountTracker() {
  const isMounted = useRef(false); // Traccia se è già stato montato
  
  useEffect(() => {
    if (!isMounted.current) {
      // se non è ancora stato montato
      console.log("Componente montato per la prima volta!");
      isMounted.current = true; // montato
    }
  }, []); //solo al mount
  
  return (
    <div>
      <h3>Mount Tracker Component</h3>
      <p>Controlla la console per il messaggio di mount!</p>
    </div>
  );
}