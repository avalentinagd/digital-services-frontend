import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

export const Auth = () => {
  const { user, logout } = useContext(TokenContext);

  return user ? (
    <p>
      Logged in as <Link to={`/users/${user.id}`}>{user.name} </Link>{' '}
      <button onClick={() => logout()}>Logout</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to='/users'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
};
