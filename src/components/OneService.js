import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom';

export const OneService = ({ service }) => {
  const { user } = useUser(service[0].idUser);
  console.log(user);

  return user ? (
    <article>
      <h2>Título: {service[0].title}</h2>
      <ul>
        <li>Descripción del servicio: {service[0].description}</li>
        <li>
          {service[0].file ? (
            <a href={`http://localhost:4000/${service[0].file}`} download>
              Descargar archivo
            </a>
          ) : null}
        </li>
        <li>Estatus del servicio: {service[0].statusService}</li>
        <li>
          This service was created by{' '}
          <Link to={`/users/${user.id}`}>
            {user.name}{' '}
            <img
              src={`http://localhost:4000/${user.photo}`}
              alt='Profile'
              width='40'
            />
          </Link>
        </li>
      </ul>
    </article>
  ) : null;
};
