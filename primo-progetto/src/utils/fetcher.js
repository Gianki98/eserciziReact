async function fetcher(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("Failed to fetch bot response");
    error.status = response.status;
    throw error;
  }

  return response.json();
}
export default fetcher;
