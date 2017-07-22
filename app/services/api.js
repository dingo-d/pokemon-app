// export function pokemonApiCall( endpoint, method ) {
//   return fetch(`https://pokedex.byinfinum.co/api/v1/${endpoint}`, {
//     method: {method},
//     headers: {
//       'Authorization': 'Token token=wYRM3sPa2JkyAmaZFweA, email=demo@infinum.co'
//     },
//     body:
//   }).then((res) => res.json());
// }

// export function createUser( username ) {
//   pokemonApiCall( 'users', 'POST' );
// }

import axios from 'axios';

var apiUrl = 'https://pokedex.byinfinum.co/api/v1/';

export function registerUser(attributes) {
  let messageElement = document.getElementById('message');
  messageElement.innerHTML = '';
  return axios.post('https://pokedex.byinfinum.co/api/v1/users', attributes, { headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
              .then((response) => {
                messageElement.innerHTML = 'User created, please log in.';
                console.log(response);
              })
              .catch((error) => {
                messageElement.innerHTML = 'Something went wrong.';
                console.log(error);
              });
}

