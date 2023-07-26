
// const { REACT_APP_SECRET_URL: api } = process.env;
const api = 'https://api.tutorchat.uz/api';

export const useRequest = () => {

  const request = async ({ url, method = 'GET', body, headers = {}, token }) => {

    if (token) headers.Authorization = `${localStorage.getItem('token')}`;

    const options = {
      body: JSON.stringify(body),
      headers: { ...headers, "Content-Type": "application/json" },
      method,
    };

    return fetch(`${api}${url}`, options).then((res) => res.json());
  };


  return request;
};

export default useRequest;