import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import todosStore from '../logic/todos_store';

import Card from './Card';

const Todos = ({bg}) => {
  console.log('Todos', bg);
  return (
    <View>
      {todosStore.todos.map((todo, index) => (
        <Card key={index} {...todo} {...{bg}} />
      ))}
    </View>
  );
};

export default observer(Todos);
