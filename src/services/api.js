import {localRead} from './storage';

const authToken = localRead('apiToken');
const authEmail = localRead('email');

const _fetchData = (endpoint, method, headers, body) => {
  const options = {};

  options.method = method;
  options.headers = headers || {};

  if (typeof body !== 'undefined') {
    options.body = JSON.stringify(body);
  }

  return fetch(`https://pokedex.byinfinum.co/api/v1/${endpoint}`, options).then((response) => response.json());
};

export function registerUser(attributes) {
  const body = {
    data: {
      type: 'users',
      attributes
    }
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  return _fetchData('users', 'POST', headers, body);
}

export function loginUser(attributes) {
  const body = {
    data: {
      type: 'session',
      attributes
    }
  };

  const headers = {
    'Content-Type': 'application/json'
  };

  return _fetchData('users/login', 'POST', headers, body);
}

export function getPokemons() {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token token=${authToken}, email=${authEmail}`
  };

  return _fetchData('pokemons', 'GET', headers);
}
