import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.login}>
          <Link to={`/users/${user.login}`}>{user.login}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GithubUserList;
