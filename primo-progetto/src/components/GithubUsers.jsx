import { Routes, Route, Outlet } from 'react-router-dom';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';

function GithubUsers() {
  return (
    <div>
      <h2>Github Users</h2>
      <Outlet />
    </div>
  );
}

export default GithubUsers;
