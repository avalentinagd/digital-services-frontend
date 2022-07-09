export const AllComments = ({ comments }) => {
  console.log({ comments });

  return comments.length ? (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <p>{comment.fileCompleted}</p>
          <li>
            {comment.fileCompleted ? (
              <a
                href={`http://localhost:4000/${comment.fileCompleted}`}
                download
              >
                Descargar archivo completado
              </a>
            ) : null}
          </li>
          <p>{comment.createdAt}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p> No hay comentarios todavía</p>
  );
};