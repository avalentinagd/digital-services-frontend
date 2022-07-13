import './Header.css';
import '../../components/cssComponents/Buttons.css';
import { useToken } from '../../context/TokenContext';
import { Link } from 'react-router-dom';
import useOwnUser from '../../hooks/useOwnUser';

const Header = () => {
  const [token, setToken] = useToken();

  const user = useOwnUser(token);
  return (
    <header className='header'>
      <p>
        <Link className='link' to='/'>
          <span className='spanDsHeader'>DS</span>
          <span className='spanDigitalHeader'>Digital</span>
          <span className='spanServicesHeader'>Services</span>
        </Link>
      </p>

      <nav>
        {token && user ? (
          <section className='divHeader'>
            <div>
              <Link to={`/users/${user.id}`}>
                <p>{user.name}</p>
                <img
                  src={`http://localhost:4000/${user.photo}`}
                  alt='Profile'
                  width='40'
                />
              </Link>{' '}
            </div>
            <button className='btnEffect' onClick={() => setToken(null)}>
              Logout
            </button>
          </section>
        ) : (
          <div className='ulHeader'>
            <p>
              <button className='btnEffect'>
                <Link to='/users'>Register</Link>
              </button>
            </p>
            <p>
              <button className='btnEffect'>
                <Link to='/login'>Login</Link>
              </button>
            </p>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
