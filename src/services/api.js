export function registerUser(attributes) {
  const body = {
    data: {
      type: 'users',
      attributes
    }
  };

  return fetch('https://pokedex.byinfinum.co/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => response.json());
}

export function loginUser(attributes) {
  const body = {
    data: {
      type: 'session',
      attributes
    }
  };

  return fetch('https://pokedex.byinfinum.co/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => response.json());
}


