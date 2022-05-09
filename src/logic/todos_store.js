import { makeObservable, observable, action, makeAutoObservable } from 'mobx';

import usersStore from './users_store';

class TodosStore {
  constructor() {
    this.todos = []
    // this.a = [];

    // makeAutoObservable(this);

    makeObservable(this, {
      todos: observable, // observer
      addTodo: action.bound,
      changeStatus: action.bound,
    });
  }

  addTodo(todo) {
    let todos = [...this.todos];
    todos.unshift({ ...todo, id: new Date().getTime(), completed: false });
    this.todos = todos; // truc tiep
  }

  async changeStatus(id) {
    // usersStore.users; // users
    // await 1;
    // await 2;
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }

  isCompleted(id) {
    return this.todos.find(todo => todo.id === id)?.completed;
  }
}

const todosStore = new TodosStore();
export default todosStore;
