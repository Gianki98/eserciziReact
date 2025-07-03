import { useState } from 'react';
import GithubUser from './GithubUser';

function GithubUsers() {
  const [inputUsername, setInputUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputUsername.trim() && !usernames.includes(inputUsername.trim())) {
      setUsernames([...usernames, inputUsername.trim()]);
      setInputUsername('');
    }
  };

  return (
    <div>
      <h2>GitHub Users Search</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Add User</button>
      </form>

      <div>
        <h3>Users:</h3>
        {usernames.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {usernames.map((username) => (
              <li key={username}>
                <GithubUser username={username} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GithubUsers;