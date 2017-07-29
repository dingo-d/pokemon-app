import {observable} from 'mobx';

class Store {
  constructor() {
    this.counter = 0;
  }
}

export default observable.object(new Store());
