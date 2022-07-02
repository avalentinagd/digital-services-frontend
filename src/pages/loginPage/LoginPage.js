import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../context/TokenContext';
import { loginUser } from '../../dbCommunication';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUser({ email, password });

      console.log(data.token);
      login(data.token);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
