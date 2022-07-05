import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

export const Auth = () => {
  const { user, logout } = useContext(TokenContext);

  return user ? (
    <p>
      <Link to={`/users/${user.id}`}>
        {user.name}
        <img
          src={`http://localhost:4000/${user.photo}`}
          alt='Profile'
          width='40'
        />
      </Link>{' '}
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
