import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

const createHeaders = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

function postLogin(body) {
  const promise = axios.post(`${URL}/sign-in`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${URL}/sign-up`, body);
  return promise;
}

function getSubscription(token) {
  const promise = axios.get(`${URL}/subscription`, createHeaders(token));
  return promise;
}

function postSubscription(token, body) {
  const promise = axios.post(`${URL}/subscription`, body, createHeaders(token));
  return promise;
}

export { postLogin, postSignUp, getSubscription, postSubscription };
