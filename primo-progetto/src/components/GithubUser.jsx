import useGithubUser from '../hooks/useGithubUser';

function GithubUser({ username }) {
  
  const { user, loading, error } = useGithubUser(username);

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