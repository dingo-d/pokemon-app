export function registerUser(attributes) {
  let body = {
    data: {
      type: 'users',
      attributes: attributes
    }
  };
console.log(body);
console.log(JSON.stringify(body));
  return fetch('https://pokedex.byinfinum.co/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => response.json());
}

