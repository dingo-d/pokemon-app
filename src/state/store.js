import {observable, computed, action, runInAction} from 'mobx';

class Store {
  constructor() {
    this.storeState = observable({
      loginEmail: '',
      loginMessage: '',
      registerMessage: '',
      pokemonListMessage: '',
      pokemons: [],
      pokemonSingleMessage: ''
    });
  }
}

export default new Store();
