import useSWR from 'swr';

function useGithubUser(username) {
  // Costruisci l'URL solo se username non è null
  // Se username è null, passa null a useSWR (non farà la richiesta)
  const url = username ? `https://api.github.com/users/${username}` : null;
  
  // useSWR gestisce automaticamente loading, error, cache, ecc.
  // Il fetcher viene preso dalla configurazione globale di SWRConfig
  const { data, error, isLoading, mutate } = useSWR(url);
  
  // Funzione per refetch manuale
  // mutate() ricarica i dati
  // Con revalidate: true forza il refetch anche se i dati sono in cache
  const refetch = () => {
    return mutate(undefined, { revalidate: true });
  };
  

  return {
    user: data,
    loading: isLoading,
    error: error,
    refetch
  };
}

export default useGithubUser;