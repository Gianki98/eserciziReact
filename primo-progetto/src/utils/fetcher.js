async function fetcher(url) {
  const response = await fetch(url);
  
  // Se la risposta non è ok, lancia un errore
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Aggiungi informazioni extra all'errore
    error.info = await response.json().catch(() => ({}));
    error.status = response.status;
    throw error;
  }
  
  return response.json();
};
export default fetcher