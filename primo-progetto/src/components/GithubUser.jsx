import { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error('User not found');
        }
        
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img 
        src={user.avatar_url} 
        alt={`${user.login} avatar`}
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
      <h3>{user.name || 'No name provided'}</h3>
      <p>@{user.login}</p>
    </div>
  );
}

export default GithubUser;