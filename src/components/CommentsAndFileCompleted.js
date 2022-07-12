import { useState } from 'react';
import { useToken } from '../context/TokenContext';
import { useNavigate, useParams } from 'react-router-dom';
import { createCommentsAndFileCompleted } from '../dbCommunication';

export const CommentsAndFileCompleted = () => {
  const { idService } = useParams();
  const [text, setText] = useState();
  const [fileCompleted, setFileCompleted] = useState(null);
  const [error, setError] = useState('');
  const [token] = useToken();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createCommentsAndFileCompleted({
        text,
        fileCompleted,
        token,
        idService,
      });

      console.log(text);
    } catch (error) {
      setError(error.message);
    } finally {
      navigate(`/services/${idService}`);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <fieldset>
        <label htmlFor='text'>Text</label>
        <textarea
          value={text}
          id='text'
          name='text'
          placeholder='The text'
          required
          onChange={(e) => setText(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor='fileCompleted'>FileCompleted</label>
        <input
          value={fileCompleted}
          type='file'
          id='fileCompleted'
          name='fileCompleted'
          required
          onChange={(e) => setFileCompleted(e.target.files[0])}
        />
      </fieldset>

      <button>Add</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
