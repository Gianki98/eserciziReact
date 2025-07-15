import { useState, useEffect } from 'react';

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Funzione per ottenere la posizione corrente
  const getCurrentLocation = () => {
    // Verifica se il browser supporta la geolocalizzazione
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // Opzioni per la geolocalizzazione
    const options = {
      enableHighAccuracy: true,  // Usa GPS se disponibile
      timeout: 10000,           // Timeout dopo 10 secondi
      maximumAge: 0             // Non usare posizioni cached
    };
    
    // Success callback
    const successCallback = (position) => {
      const { latitude, longitude, accuracy, altitude, heading, speed } = position.coords;
      
      setLocation({
        latitude,
        longitude,
        accuracy,
        altitude,
        heading,
        speed,
        timestamp: position.timestamp
      });
      setLoading(false);
    };
    
    // Error callback
    const errorCallback = (error) => {
      let errorMessage;
      
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          errorMessage = "The request to get user location timed out.";
          break;
        default:
          errorMessage = "An unknown error occurred.";
      }
      
      setError(errorMessage);
      setLoading(false);
    };
    
    // Richiedi la posizione
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  };
  
  // Ottieni la posizione al mount del componente (opzionale)
  useEffect(() => {
    // Puoi decommentare la riga sotto se vuoi ottenere la posizione automaticamente
    // getCurrentLocation();
  }, []);
  
  return {
    location,
    loading,
    error,
    getCurrentLocation
  };
}

export default useCurrentLocation;