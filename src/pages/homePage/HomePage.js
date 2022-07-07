import useServices from '../../hooks/useServices';
import { ServicesList } from '../../components/ServicesList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Link } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';

export const HomePage = () => {
  const { services, loading, error } = useServices();
  const [token] = useToken();
  if (loading) return <p>Cargando la lista de todos los servicios</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>List services</h1>

      {token ? (
        <Link to='/services'>
          <button>Crear un servicio</button>
        </Link>
      ) : null}

      <ServicesList services={services} />
    </section>
  );
};
