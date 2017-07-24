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
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.')});
}

