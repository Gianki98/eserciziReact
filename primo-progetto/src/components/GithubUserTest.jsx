import { useState } from 'react';
import useGithubUser from '../hooks/useGithubUser';

function GithubUserTest() {
  const [username, setUsername] = useState('octocat');
  const { user, loading, error, refetch } = useGithubUser(username);
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px'
    }}>
      <h2>GitHub User Hook Test</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={refetch}>Refresh</button>
      </div>
      
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img 
            src={user.avatar_url} 
            alt={user.login}
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
          />
          <div>
            <h3>{user.name || 'No name'}</h3>
            <p>@{user.login}</p>
            <p>Followers: {user.followers} | Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubUserTest;