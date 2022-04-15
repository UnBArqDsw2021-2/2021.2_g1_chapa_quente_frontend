import api from '../services';

export const setUserLocalStorage = isLogged => {
  localStorage.setItem('userIsOn', JSON.stringify(isLogged));
};

export const getUserLocalStorage = () => {
  const logged = localStorage.getItem('userIsOn');

  if (!logged) {
    return null;
  }

  const wasLogged = JSON.parse(logged);

  return wasLogged ?? null;
};

export const loginRequest = async (email, password) => {
  try {
    const request = await api.post('', { email, password });

    return request.data;
  } catch (error) {
      return null
  }
};
