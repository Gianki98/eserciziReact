import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Aggiorna l'ora ogni secondo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function per rimuovere l'intervallo quando il componente viene smontato
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Array vuoto significa che l'effect viene eseguito solo al mount

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
