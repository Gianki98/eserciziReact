import React from 'react';

const MouseClicker = () => {
  // Event handler per il primo bottone
  const handleButtonClick = (event) => {
    console.log('Nome del bottone:', event.target.name);
  };

  // Event handler per l'immagine
  const handleImageClick = (event) => {
    event.stopPropagation(); // Impedisce la propagazione dell'evento al bottone
    console.log('Src dell\'immagine:', event.target.src);
  };

  return (
    <div>
      {/* Primo bottone */}
      <button name="one" onClick={handleButtonClick}>
        Bottone One
      </button>

      {/* Secondo bottone con immagine */}
      <button name="two" onClick={handleButtonClick}>
        Bottone Two
        <img 
          src="https://via.placeholder.com/50" 
          alt="placeholder"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
};

export default MouseClicker;