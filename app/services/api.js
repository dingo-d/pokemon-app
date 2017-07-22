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

export function registerUser( attributes) {
  return axios.post( 'https://pokedex.byinfinum.co/api/v1/users', attributes)
              .then((response) => console.log(response))
              .catch((error) => console.log(response));
}

