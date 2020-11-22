import axios from 'axios';

const BASE_URL = `https://5.react.pages.academy/six-cities`;
const TIMEOUT = 5000;
const WITH_CREDENTIALS = true;

const HttpCode = {
  UNAUTHORIZED: 401
};

const createAPI = (onUnauthorized) => {

  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: WITH_CREDENTIALS,
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createAPI};
