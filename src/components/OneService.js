export const OneService = ({ service }) => {
  return (
    <article>
      <h2>Título: {service[0].title}</h2>

      <p>Descripción del servicio: {service[0].description}</p>

      {service[0].file ? (
        <a href={`http://localhost:4000/${service[0].file}`} download>
          Descargar archivo
        </a>
      ) : null}

      <p>Estatus del servicio: {service[0].statusService}</p>
      <p>Id del Usuario: {service[0].idUser}</p>
      {/* <p>
        {console.log(user.name)}
        Crteate by <Link to={`/users/${user.id}`}>{user.name}</Link> on{' '}
        {service.createdAt}.
      </p> */}
    </article>
  );
};
