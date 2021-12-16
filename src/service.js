import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;

const createHeaders = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

// function postLogin(body) {
//   const promise = axios.post(`${URL}/sign-in`, body);
//   return promise;
// }

function getDisciplinas() {
  const promise = axios.get(`${URL}/disciplinas`);
  return promise;
}

function getProfessoresDasDisciplinas(body) {
  console.log(body);
  const promise = axios.post(`${URL}/profdis`, body);
  return promise;
}

function postProva(body) {
  console.log(body);
  const promise = axios.post(`${URL}/prova`, body);
  return promise;
}

export { getDisciplinas, getProfessoresDasDisciplinas, postProva };
