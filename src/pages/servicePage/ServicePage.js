import useService from '../../hooks/useService';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import { OneService } from '../../components/OneService';
import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';

export const ServicePage = () => {
  const { idService } = useParams();
  const { service, loading, error } = useService(idService);
  const { user } = useContext(TokenContext);
  console.log(service, loading, error);

  if (loading) return <p>Cargando el servicio seleccionado...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>The service is from {user.name} </h1>
      <OneService service={service} />
    </section>
  );
};
