import { useState, useEffect } from "react";

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funzione per fetchare i dati
  const fetchUser = async () => {
    // Se non c'è username, non fare nulla
    if (!username) {
      setUser(null);
      setError(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Effetto che si attiva quando cambia l'username
  useEffect(() => {
    fetchUser();
  }, [username]);

  // Restituiamo tutto ciò che serve
  return {
    user,
    error,
    loading,
    refetch: fetchUser,
  };
}

export default useGithubUser;
