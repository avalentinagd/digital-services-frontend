import './HomePage.css';
import useServices from '../../hooks/useServices';
import { ServicesList } from '../../components/serviceList/ServicesList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Link } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';

export const HomePage = () => {
  const { services, loading, error } = useServices();
  const [token] = useToken();
  if (loading) return <p>Cargando la lista de todos los servicios</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className='sectionHomePage'>
      <h1>Digital Services, always by your side</h1>

      {token ? (
        <Link to='/services'>
          <button className='link'>Crear un servicio</button>
        </Link>
      ) : null}

      <h3>Select a service</h3>
      <ServicesList services={services} />
    </section>
  );
};
