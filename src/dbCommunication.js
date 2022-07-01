//Éstas funciones llevan a cabo la comunicación con la base de datos
export const getAllServices = async () => {
  const response = await fetch('http://localhost:4000/services');

  const { data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getOneService = async (id) => {
  const response = await fetch(`http://localhost:4000/services/${id}`);

  const { data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const registerUser = async ({
  name,
  email,
  biography,
  photo,
  password,
}) => {
  const formData = new FormData();

  formData.append('name', name);
  formData.append('email', email);
  formData.append('biography', biography);
  formData.append('photo', photo);
  formData.append('password', password);

  const response = await fetch('http://localhost:4000/users', {
    method: 'POST',
    mode: 'cors',
    body: formData,
  });
  console.log('Estamos por aquí');

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
