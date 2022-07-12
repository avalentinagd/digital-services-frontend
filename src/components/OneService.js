import useOwnUser from '../hooks/useOwnUser';
import { Link } from 'react-router-dom';
import { updateServiceStatus } from '../dbCommunication';
import { useToken } from '../context/TokenContext';
import useUser from '../hooks/useUser';

export const OneService = ({ service }) => {
  const [token] = useToken();
  const ownUser = useOwnUser(token);
  const { user } = useUser(service[0].idUser);
  console.log(user);
  console.log(ownUser);

  return ownUser ? (
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

        {user.id === ownUser.id ? (
          <li>
            <button
              onClick={async () => {
                if (window.confirm('Are you sure?')) {
                  await updateServiceStatus(service[0].id, token);
                }
              }}
            >
              Marcar como resuelto
            </button>
          </li>
        ) : null}

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
  ) : user ? (
    <div>
      <p>Holaaaaaaaaaaaaaaaaaa</p>
      <h2>Título: {service[0].title}</h2>
      <li>Descripción del servicio: {service[0].description}</li>
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
    </div>
  ) : null;
};
