import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

function ShowGithubUser() {
  const { username } = useParams();
  return <GithubUser username={username} />;
}

export default ShowGithubUser;
