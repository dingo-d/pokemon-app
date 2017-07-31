import {observable, computed, action, runInAction} from 'mobx';

class Store {
  constructor() {
    this.storeState = observable({
      loginEmail: '',
      loginMessage: '',
      registerEmail: '',
      registerUsername: '',
      registerPassword: '',
      registerPasswordRepeat: '',
      registerMessage: ''
    });
  }
}

export default new Store();
