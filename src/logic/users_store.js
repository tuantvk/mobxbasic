import { makeObservable, observable, action, runInAction } from 'mobx';
import axios from 'axios';

class UsersStore {
  constructor() {
    this.users = [];
    this.abortController = null;

    makeObservable(this, {
      users: observable,
      abortController: observable,
      fetchUsers: action,
    });
  }

  async fetchUsers(params) { // 2
    if (this.abortController) {  // 1
      this.abortController.abort(); // Cancel previous request
    }
    this.abortController = new AbortController();
    axios
      .get('http://192.168.0.46:5000', {
        params,
        signal: this.abortController.signal, // 1
      })
      .then(response => {
        runInAction(() => {
          this.users = response.data;
          console.log('response', response.data);
        });
      })
      .catch(error => {
        console.log('error', error, params);
      });
  }
}

const usersStore = new UsersStore();
export default usersStore;
