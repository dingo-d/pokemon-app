import {observable, computed, action, runInAction} from 'mobx';

class Store {
  constructor() {
    this.storeState = observable({
      loginEmail: '',
      loginMessage: '',
      registerMessage: ''
    });
  }
}

export default new Store();
