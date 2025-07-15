import useCurrentLocation from '../hooks/useCurrentLocation';

function LocationTracker() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px'
    }}>
      <h2>Location Tracker</h2>
      
      <button 
        onClick={getCurrentLocation} 
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px',
          marginBottom: '20px' 
        }}
      >
        {loading ? 'Getting Location...' : 'Get My Location'}
      </button>
      
      {error && (
        <div style={{ 
          color: 'red', 
          padding: '10px', 
          backgroundColor: '#fee',
          borderRadius: '5px',
          marginBottom: '10px'
        }}>
          Error: {error}
        </div>
      )}
      
      {location && (
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '15px',
          borderRadius: '5px'
        }}>
          <h3>Your Location:</h3>
          <p><strong>Latitude:</strong> {location.latitude.toFixed(6)}°</p>
          <p><strong>Longitude:</strong> {location.longitude.toFixed(6)}°</p>
          <p><strong>Accuracy:</strong> ±{location.accuracy.toFixed(0)} meters</p>
          {location.altitude !== null && (
            <p><strong>Altitude:</strong> {location.altitude.toFixed(0)} meters</p>
          )}
          <p><strong>Timestamp:</strong> {new Date(location.timestamp).toLocaleString()}</p>
          
          <div style={{ marginTop: '15px' }}>
            <a 
              href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#007bff',
                textDecoration: 'none'
              }}
            >
              View on Google Maps 🗺️
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationTracker;