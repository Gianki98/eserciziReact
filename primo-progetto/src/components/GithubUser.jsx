import { useEffect, useState } from 'react';

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h3>{user.name || user.login}</h3>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <p>{user.bio}</p>
    </div>
  );
}

export default GithubUser;
