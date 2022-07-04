import { Link } from 'react-router-dom';

export const ServicesList = ({ services }) => {
  return services.length ? (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <Link to={`/services/${service.id}`}>{service.title}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <p> No hay servicios registrados todavía</p>
  );
};
